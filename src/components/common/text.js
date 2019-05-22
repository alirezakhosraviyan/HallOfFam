/*
Text component in different sizes to use for making pages

Signed by alireza.infotech@gmail.com
 *  */

import React from 'react';
import { Text } from "react-native";
import { MEDIUM, LARGE, SMALL } from '../../api/constants/sizes';
import {PRIMARY_TEXT_COLOR} from "../../api/constants/colors";


export const MedText = props => (
    <Text {...props} style={{color: PRIMARY_TEXT_COLOR, fontSize : MEDIUM, ...props.style }} />
);

export const LargeText = props => (
    <Text {...props} style={{ color: PRIMARY_TEXT_COLOR, fontSize : LARGE, ...props.style }} />
);

export const SmallText = props => (
    <Text {...props} style={{ color: PRIMARY_TEXT_COLOR,  fontSize : SMALL, ...props.style }} />
);
