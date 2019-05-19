import React from 'react';
import { Text } from "react-native";
import { MEDIUM, LARGE, SMALL } from '../../api/constants/sizes';


export const MedText = props => (
    <Text {...props} style={{ fontSize : MEDIUM, ...props.style }} />
);

export const LargText = props => (
    <Text {...props} style={{ fontSize : LARGE, ...props.style }} />
);

export const SmallText = props => (
    <Text {...props} style={{ fontSize : SMALL, ...props.style }} />
);
