import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {useDebouncedCallback} from 'use-debounce';
import {CircularIndicator} from '../components/ActivityIndicator';
import {Icon} from '../components/Icon';
import {ImageModal} from '../components/Modal';
import {ImageView} from '../components/ImageView';
import {Icons} from '../../assets/icons';
import {GetPhotos} from '../../services/api-invoker/get-photos';
import {SearchPhotos} from '../../services/api-invoker/get-search-photos';
import {colors} from '../../utils/colors';

import {style} from './style';

export const ImageScreen = () => {
  const [imageData, setImageData] = useState();
  const [loading, setLoading] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState();

  const NULL = () => null;
  const getImage = async () => {
    const fetchImageData = await GetPhotos(setLoading);
    setImageData(fetchImageData);
    setLoading(false);
  };

  const searchImages = async searchItem => {
    setLoading(true);
    const response = searchItem
      ? await SearchPhotos(searchItem, setLoading)
      : getImage();
    setImageData(response?.results);
    setLoading(false);
  };
  const debounce = useDebouncedCallback(
    newValue => searchImages(newValue),
    500,
  );

  React.useMemo(async () => getImage(), []);

  return (
    <View style={style.mainContainer}>
      <View style={style.header}>
        <TouchableOpacity onPress={NULL} style={style.iconMargin}>
          <Icon source={Icons.MENU} />
        </TouchableOpacity>
        <View style={style.titleContainer}>
          <Text style={style.headerTitle}>{!showSearchBar && 'Images'}</Text>
          {showSearchBar && (
            <TextInput
              style={style.searchBar}
              placeholder="Search Image"
              onChangeText={e => debounce(e)}
            />
          )}
          <TouchableOpacity
            onPress={() => setShowSearchBar(!showSearchBar)}
            style={style.searchIconContainer}>
            <Image source={Icons.SEARCH} style={style.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.imageContainer}>
        {imageData && imageData?.length === 0 && (
          <Text style={style.noDataText}>No Data found</Text>
        )}
        {loading ? (
          <CircularIndicator
            color={colors.PURPLE}
            style={style.activityIndicator}
          />
        ) : (
          <FlatList
            data={imageData}
            renderItem={item => (
              <ImageView
                imageItem={item}
                setCurrentImage={setCurrentImage}
                setModalVisible={setModalVisible}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        )}
      </View>

      <ImageModal
        image={currentImage}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};
