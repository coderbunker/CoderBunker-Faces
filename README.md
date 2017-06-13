# CoderBunker-Faces

## Intro
Welcome to CoderBunker's first face detection system! 
The Rasberry Pi has a camera that will take a picture when someone walks in front of the coffee machine.  
Each picture is sent to the IBM Watson Visual Recognition API that will detect any faces in the picture.
Each face is cropped and saved into a file and saved into a database. 
Soon you will be able to see if your face was detected by Watson on a website I am developing at the moment. 

## How this works
The Raspberry Pi is connected to a PIR sensor that detectes movement in front of the coffee machine. When the sensor detects movement
a picture is taken. If you will see a red light come on then the Raspberry Pi is taking a picture!
The picture is sent to the Watson Visual Recognition API for processing and each face in the picture is cropped and saved into a 
different file. 
Each "face-picture" is then sent to a QingStor database where.

## Contact
If you want to talk to me you can find me at CoderBunker most of the day. 

Alternatively you can contact me here:
- email: jpbeltrami@gmail.com
- wechat: https://jpbimages.sh1a.qingstor.com/wechatQR.jpeg?expires=1492848801&signature=DTI2HkBSMbttkA2ip%2FbcEKEzysptTNXcX8EIPswBF7o%3D&access_key_id=CSOLEWFQKFZRHHQLBXES
