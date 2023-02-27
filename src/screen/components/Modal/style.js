import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const style = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  imageContainer: {
    width: width - 20,
    height: height - 130,
    resizeMode: 'contain',
  },
});
