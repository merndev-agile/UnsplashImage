import React from 'react';
import {ActivityIndicator} from 'react-native';

export const CircularIndicator = ({color, style}) => (
  <ActivityIndicator color={color} style={style} size="large" />
);
