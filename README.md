# HallOfFam
This project is created for pixel test job application.

## We assume you have already installed nodejs and react native on your machine!

### To run project:

 Firstly : Clone project from master branch using following command : 

`git clone https://github.com/alirezakhosraviyan/HallOfFam.git`

Secondly: Install dependencies using follwoing commands in root of project

`npm i`

Thirdly : Create Android and iOS folders using follwoing command: 
 -andswer all question with y
 
`react-native upgrade`

Fourthly : Link assents to your folder project

`react-native link` 

#### Start your simulators

Fifthly : Start application using follwoing commnad:

`react-native run-android` or similarly for ios `react-native run-ios`

## configurations
 - Android: Save your sound clip files under the directory `android/app/src/main/res/raw`. Note that files in this directory must be lowercase and underscored (e.g. my_file_name.mp3) and that subdirectories are not supported by Android.
 
 - iOS: Open Xcode and add your sound files to the project (Right-click the project and select Add Files to `[PROJECTNAME]`)

#### Attentions : In some cases some dependencies of packages dosen't install automatically

##### to install them manually run follwoing commands : 

`npm install --save util`

`npm install --save path`
