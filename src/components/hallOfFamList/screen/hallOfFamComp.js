import React, { Component } from 'react';
import {View, FlatList, Image} from 'react-native';
import styles from '../styles/main';
import {loadHallOfFams} from "../../../redux/hallOfFamList/actions/hallOfFamAction";
import {
  widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class HallOfFam extends Component {

  constructor(props) {
    super(props);

    this.state = {
      actors : []
    }
  }
  componentDidMount() {
    this.props.loadHallOfFams();
  }

  async componentWillReceiveProps(nextProps) {
    if(nextProps.status === 200){
      const actors = await nextProps.hallOfFams.map((cur)=> {
        return { image : cur.download_url }
      });
      await actors.splice(2, 0, { image : 'https://i.pinimg.com/originals/2e/29/c4/2e29c41787d04c4b3de4aa3832566357.jpg'});
      this.setState({ actors })
    }
  }

  // shouldComponentUpdate(newProps) {
  //   if (this.props.hallOfFams === newProps.hallOfFams)
  //     return false;
  //   return true
  // }

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