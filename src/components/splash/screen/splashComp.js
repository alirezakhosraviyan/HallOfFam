import React, { Component } from 'react';
import save_first_time_entrance from "../../welcome/utils/save_first_time_entrance";
import check_first_time_entrance from "../../welcome/utils/check_first_time_entrance";
import { View } from "react-native";
import {MedText} from "../../common/text";

export default class Splash extends Component {

  async componentWillMount(){
    const res = await check_first_time_entrance();
    if (res){
      console.warn(`dscsda ${res}`);
      await this.props.navigation.navigate('mainStack')
    }else{
      await save_first_time_entrance();
      await this.props.navigation.navigate('introStack')
    }
  }

  render() {
    return(<View>
      <MedText>Splash Screen</MedText>
    </View>);
  }
};