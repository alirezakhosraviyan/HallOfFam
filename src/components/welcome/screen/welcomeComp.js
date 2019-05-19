import React, { Component } from 'react';
import { View } from 'react-native';
import {MedText} from "../../common/text";
import check_first_time_entrance from "../utils/check_first_time_entrance";

class welcomeComponent extends Component {

  componentWillMount(){
    if (!check_first_time_entrance()){
      this.navigation.navigate('intro')
    }
  }

  render(){
    return (
        <View>
          <MedText>This is a test</MedText>
        </View>
    )
  }
}