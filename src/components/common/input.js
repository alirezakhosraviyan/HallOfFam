import React from 'react';
import { TextInput } from "react-native";
import { MEDIUM, LARGE, SMALL } from '../../api/constants/sizes';


export const MedTextInput = props => (
    <TextInput {...props} style={{ fontSize : MEDIUM, ...props.style }} />
);

export const LargTextInput = props => (
    <TextInput {...props} style={{ fontSize : LARGE, ...props.style }} />
);

export const SmallTextInput = props => (
    <TextInput {...props} style={{ fontSize : SMALL, ...props.style }} />
);
