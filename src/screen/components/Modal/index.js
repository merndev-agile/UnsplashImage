import React from 'react';
import {View, Image, Button, Platform} from 'react-native';
import Modal from 'react-native-modal';
import {style} from './style';

export const ImageModal = ({modalVisible, setModalVisible, image}) => {
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      collapsable={true}
      style={style.modalView}>
      <View>
        <Image
          source={{uri: image?.item?.urls?.full}}
          style={style.imageContainer}
        />
        <Button
          title="Close"
          onPress={() => setModalVisible(false)}
          color={Platform.OS === 'ios' ? 'white' : 'transparent'}
        />
      </View>
    </Modal>
  );
};
