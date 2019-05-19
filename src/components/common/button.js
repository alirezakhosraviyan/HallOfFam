import React from 'react';
import { TouchableOpacity } from "react-native";
import { MEDIUM, LARGE, SMALL } from '../../api/constants/sizes';


export const MedButton = props => (
    <TouchableOpacity {...props} style={{ fontSize : MEDIUM, ...props.style }} />
);

export const LargButton = props => (
    <TouchableOpacity {...props} style={{ fontSize : LARGE, ...props.style }} />
);

export const SmallButton = props => (
    <TouchableOpacity {...props} style={{ fontSize : SMALL, ...props.style }} />
);
