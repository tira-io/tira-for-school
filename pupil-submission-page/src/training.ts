import * as mobilenetModule from '@tensorflow-models/mobilenet'
import * as tf from '@tensorflow/tfjs'
import * as knnClassifier from '@tensorflow-models/knn-classifier';

let mobileNetPromise = mobilenetModule.load()
let mobileNet: any = null;

export async function tf_from_pixels(img_src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = img_src
    img.width = 227
    img.height = 227

    if(img.complete && img.naturalHeight !== 0) {
      resolve(tf.fromPixels(img))
    } else {
      img.onload = () => {
        resolve(tf.fromPixels(img))
      }
    }
  })
}

export function tf_to_pixels(tensor: any) {
  return tf.toPixels(tensor)
}

class Model {
  mobileNet: any
  knn: any

  constructor() {
    this.mobileNet = mobileNet
    this.knn = knnClassifier.create();
  }

  async infer_with_mobilenet(img_src: string) {
    let img = await tf_from_pixels(img_src)

    return this.mobileNet.infer(img, 'conv_preds')
  }

  async train(image: string, class_id: 0|1) {
    const infer = await this.infer_with_mobilenet(image)
    await this.knn.addExample(infer, class_id)
  }

  async predict(image: string) {
    const logits = await this.infer_with_mobilenet(image)
    const ret = await this.knn.predictClass(logits, 10)
    return ret
  }
}

export var model: Model|null = null

export async function create_model() {
    if (mobileNet == null) {
      console.log('ToDo: Load Mobile net...')
      mobileNet = await mobileNetPromise
    }

    model = new Model()
}

mobileNetPromise.then((mobilenet:any) => {
  mobileNet = mobilenet
  console.log('mobilenet loaded' + mobilenet)
})
