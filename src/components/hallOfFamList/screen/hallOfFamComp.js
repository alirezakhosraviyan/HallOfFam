/*
Main components

shows list of halls with fixed value in place 3

Signed by alireza.infotech@gmail.com
 *  */

import React, { Component } from 'react';
import {View, FlatList, Image} from 'react-native';
import styles from '../styles/main';

import {
  widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class HallOfFam extends Component {

  constructor(props) {
    super(props);

    this.state = {
      actors : [],
      fixed_actor : "'https://i.pinimg.com/originals/2e/29/c4/2e29c41787d04c4b3de4aa3832566357.jpg'"
    }
  }
  componentDidMount() {
    //loads Hall of FAMS in asynchronously
    this.props.loadHallOfFams();
  }

  async componentWillReceiveProps(nextProps) {
    if(nextProps.status === 200){
      const actors = await nextProps.hallOfFams.map((cur)=> {
        return { image : cur.download_url }
      });

      // makes place 3 fixed for reserved actor
      await actors.splice(2, 0, { image : this.state.fixed_actor});
      this.setState({ actors })
    }
  }

  shouldComponentUpdate(newProps) {

    //checks to avoid unnecessary updates
    if (this.props.hallOfFams === newProps.hallOfFams)
      return false;
    return true
  }

  render() {
    return (
        <View>
          <FlatList
              contentContainerStyle={styles.grid}
              data={this.state.actors}
              renderItem={val => {
                const { item } = val;
                return (<Image style={{ height : hp(30), width: wp(40) }} source={{ uri: item.image }} />)
              }}/>
        </View>
    )
  }
}