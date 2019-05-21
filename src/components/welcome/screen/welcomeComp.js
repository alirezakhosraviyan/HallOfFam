import React, { Component } from 'react';
import check_first_time_entrance from "../utils/check_first_time_entrance";
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/main';

import shuffleSeed from 'shuffle-seed';
import rn from 'random-number'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MedTextInput} from "../../common/textInput";
import {SmallText} from "../../common/text";
import save_first_time_entrance from "../utils/save_first_time_entrance";


export default class welcomeComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      data_source: [
        {
          ds: "https://media.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif",
        },
        {
          ds: "https://media.giphy.com/media/26gsqQxPQXHBiBEUU/giphy.gif",
        },
        {
          ds: "https://media.giphy.com/media/l0EwYkyU1JCExVquc/giphy.gif",
        },
        {
          ds : "https://media.giphy.com/media/d1E1szXDsHUs3WvK/giphy.gif",
        },
        {
          ds: "https://media.giphy.com/media/l0ExvMqtnw7aTzPCE/giphy.gif",
        },

      ],
      selected_gif : 0,
      shuffle_value : 1
    }
  }

  componentDidMount() {
    this.interval = setInterval(()=>this.setState({selected_gif : (this.state.selected_gif)%5 }),
        6000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return(
          <View style={styles.mainContainer}>
            <Image style={{ height: hp(40), width: wp(85) }} source={{ uri: this.state.data_source[this.state.selected_gif].ds}}/>
            <MedTextInput placeholder={"Enter a number"}  keyboardType={'numeric'} value={this.state.selected_gif} onChange={(inp)=>this.setState({ shuffle_value : inp })}/>
            <TouchableOpacity onPress={()=>{
              const tmp_shuffle = shuffleSeed.shuffle(this.state.data_source, this.state.shuffle_value)
              this.setState({ data_source : tmp_shuffle })}}><SmallText>Save</SmallText></TouchableOpacity>
            <TouchableOpacity onPress={()=> {
              const random_number = rn({max: 9, min: 1});
              const shuffled_list = shuffleSeed.shuffle(this.state.data_source, random_number);
              this.setState({
                shuffle_value: random_number,
                data_source: shuffled_list
              })}}>
              <SmallText>Randomise</SmallText>
            </TouchableOpacity>
          </View>
    )
  }
};