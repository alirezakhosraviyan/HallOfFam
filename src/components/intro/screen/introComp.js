import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import slides from '../utils/slides';

export default (props) => (<AppIntroSlider
    slides={slides}
    onDone={() => props.navigation.navigate('mainStack')}
    showSkipButton={true}
    onSkip={() => props.navigation.navigate('mainStack')}
/>);