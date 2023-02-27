import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {font} from '../../utils/text';

export const style = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.PURPLE,
    height: 80,
    marginBottom: 8,
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },

  menuIcon: {
    height: 20,
    width: 20,
  },

  searchIconContainer: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.BLACK,
    padding: 6,
  },

  searchIcon: {
    height: 20,
    width: 20,
  },

  searchBar: {
    borderWidth: 0,
    borderColor: colors.BLACK,
    width: '70%',
    marginRight: 10,
    padding: 6,
    backgroundColor: colors.WHITE,
    borderRadius: 7,
  },

  iconMargin: {
    marginLeft: '4%',
  },

  headerTitle: {
    color: colors.WHITE,
    fontSize: font.fontSize.large,
    fontWeight: font.weight.bold,
    marginLeft: '12%',
  },

  imageContainer: {
    height: '89%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  activityIndicator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
  },

  noDataText: {
    fontSize: font.fontSize.extraExtraLarge,
    fontWeight: font.weight[700],
  },
});
