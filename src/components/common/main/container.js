/*
General components to use for making pages

Signed by alireza.infotech@gmail.com
 *  */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Platform, BackHandler} from 'react-native';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {LargeText, MedText} from "../text";
import {SMALL} from "../../../api/constants/sizes";
import {LIGHT_PRIMARY, PRIMARY, PRIMARY_TEXT_COLOR, WHITE} from "../../../api/constants/colors";


export const Header =  ({ onLeftButtonPress, title, onRightButtonPress}) => {
  return(
  <View style={header_styles.mainContainer}>
    <View style={header_styles.leftContainer}>
      <TouchableOpacity onLongPress={()=>{
        BackHandler.exitApp();
      }} style={[header_styles.button, { alignItems: 'flex-start' }]} onPress={onLeftButtonPress}>
        <MedText style={header_styles.buttonText}>Back</MedText>
      </TouchableOpacity>
    </View>
    <View style={header_styles.centerContainer}><LargeText style={header_styles.title}>{title}</LargeText></View>
    <View style={header_styles.rightContainer}>
      <TouchableOpacity style={[header_styles.button, { alignItems: 'flex-end' }]} onPress={onRightButtonPress}>
        <MedText style={header_styles.buttonText}>Forward</MedText>
      </TouchableOpacity>
    </View>

  </View>
  );};


const header_styles = StyleSheet.create({
  mainContainer : {
    height: hp(10),
    paddingTop: Platform.OS === 'ios' ? hp(4) : 0,
    flexDirection: 'row',
    backgroundColor: PRIMARY
  },
  leftContainer: {
    flex: 1
  },
  rightContainer: {
    flex: 1
  },
  centerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    flex: 1,
    fontSize: 50,
    margin: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {color: PRIMARY_TEXT_COLOR , fontSize: SMALL},
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    color: WHITE
  }

});


export const Body =  (props) => (
    <View height={hp(90)} style={[body_styles.mainContainer, props.style]}>
    </View>
);


const body_styles = StyleSheet.create({
  mainContainer : {
    backgroundColor: LIGHT_PRIMARY
  }
});



export const Footer =  (props) => (
    <View height={'10%'} style={[Footer_styles.mainContainer, props.style]} />
);


const Footer_styles = StyleSheet.create({
  mainContainer : {
  }
});


export const Container =  (props) => (
    <View style={[Container_styles.mainContainer, props.style]} />
);


const Container_styles = StyleSheet.create({
  mainContainer : {
    flex: 1
  }
});