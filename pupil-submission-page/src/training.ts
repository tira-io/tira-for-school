import * as mobilenetModule from '@tensorflow-models/mobilenet'
import * as tf from '@tensorflow/tfjs'
import * as knnClassifier from '@tensorflow-models/knn-classifier';

let mobileNetPromise = mobilenetModule.load()
let mobileNet: any = null;


export async function load_model() {
    if (mobileNet == null) {
      console.log('ToDo: Load Mobile net...')
      mobileNet = await mobileNetPromise
    }

    class Main {
      mobileNet: any
      knn: any

      constructor() {
        this.mobileNet = mobileNet
        this.knn = knnClassifier.create();
      }

      infer_with_mobilenet(img_src: string) {
        const img = new Image()
        img.src = img_src;
        img.width = 227
        img.height = 227

        return this.mobileNet.infer(tf.browser.fromPixels(img), 'conv_preds')
      }

      train(image: string, class_id: 0|1) {
        const infer = this.infer_with_mobilenet(image)
        this.knn.addExample(infer, class_id)
      }

      async predict(image: string) {
        const logits = this.infer_with_mobilenet(image)
        const ret = await this.knn.predictClass(logits, 10)
        return ret
      }
    }

    return new Main()
}

mobileNetPromise.then((mobilenet:any) => {
  mobileNet = mobilenet
  console.log('mobilenet loaded' + mobilenet)
})

export async function predict(image: HTMLImageElement) {
  const img = tf.browser.fromPixels(image)
  const infer = mobileNet.infer(img, 'conv_preds')
  const result = await infer.data()
  return result
}