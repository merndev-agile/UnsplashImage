import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {style} from './style';

export const ImageView = ({setCurrentImage, setModalVisible, imageItem}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setCurrentImage(imageItem);
        setModalVisible(true);
      }}>
      <Image
        source={{uri: imageItem?.item?.urls?.regular}}
        style={style.imageView}
      />
    </TouchableOpacity>
  );
};
