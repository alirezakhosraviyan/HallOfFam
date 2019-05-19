import React from 'react';
import { View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import slides from '../slides';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
          <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 50,
              }}>
            <Text>
              This will be your screen when you click Skip from any slide or Done
              button at last
            </Text>
          </View>
      );
    } else {
      //Intro slides
      return (
          <AppIntroSlider
              slides={slides}
              //comming from the JsonArray below
              onDone={this._onDone}
              //Handler for the done On last slide
              showSkipButton={true}
              onSkip={this._onSkip}
          />
      );
    }
  }
}