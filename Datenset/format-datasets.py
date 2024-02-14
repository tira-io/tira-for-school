#!/usr/bin/env python3
from PIL import Image
from glob import glob
from tqdm import tqdm

directories = {
    'Gewähren- Yield': 'yield',
    'Vorfahrt- Priority': 'priority'
}

for d in directories:
    images = []
    for s in ['Nacht', 'Tag']:
        images += glob(f'Datenset/Beispiele/{d}/{s}/**/**.jpg')
    for image_id, image in tqdm(zip(range(len(images)), images), d):
        image = Image.open(image)
        image.thumbnail((400, 400))
        image.save(f'pupil-submission-page/src/assets/validation-data/{directories[d]}-{image_id}.jpg')

