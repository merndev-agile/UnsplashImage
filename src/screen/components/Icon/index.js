import React from 'react';
import {Image} from 'react-native';
import {style} from './style';

export const Icon = ({source}) => {
  return <Image source={source} style={style.icon} />;
};
