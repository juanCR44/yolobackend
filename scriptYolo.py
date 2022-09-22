
from io import BytesIO
import base64
import yolov5
from PIL import Image
import torch
import os

#import utils
#import cv2
#import matplotlib.pyplot as plt
# display = utils.notebook_init()  # checks
model = yolov5.load(os.getcwd() +  '/SGD640best.pt')

# set model parameters
model.conf = 0.25  # NMS confidence threshold
model.iou = 0.45  # NMS IoU threshold
model.agnostic = False  # NMS class-agnostic
model.multi_label = False  # NMS multiple labels per box
model.max_det = 1000  # maximum number of detections per image

#test_dir = 'C:/Users/juanc/Desktop/yoloBACK/Certificacion2/imagestest'

#test_dir_list = os.listdir(test_dir)

test_path =  os.getcwd() +'/IMG_PRODUCTS_VAL826.png'
resultsInf = model(test_path)

tobyte = []

detectedimg = Image.fromarray(resultsInf.render()[0])
infodetection = resultsInf

size = len(infodetection.pandas().xyxy[0])
for x in range(size):
    left = infodetection.pandas().xyxy[0].xmin[x]
    top = infodetection.pandas().xyxy[0].ymin[x]
    right = infodetection.pandas().xyxy[0].xmax[x]
    bottom = infodetection.pandas().xyxy[0].ymax[x]

    img = detectedimg
    imgcrop = img.crop((left, top, right, bottom))
    tobyte.append(imgcrop)

result = []

buffered = BytesIO()
detectedimg.save(buffered, format="JPEG")
img_str = base64.b64encode(buffered.getvalue())
img_base64 = bytes("data:image/jpeg;base64,", encoding='utf-8') + img_str
final = img_base64.decode('UTF-8')


result.append(final)

for x in range(len(tobyte)):
    buffered = BytesIO()
    tobyte[x].save(buffered, format="JPEG")
    img_str = base64.b64encode(buffered.getvalue())
    img_base64 = bytes("data:image/jpeg;base64,", encoding='utf-8') + img_str
    finalcrop = img_base64.decode('UTF-8')
    result.append(finalcrop)
# print(img_str)

# print(img_base64)

print(result)

# print(img_base64[0])
