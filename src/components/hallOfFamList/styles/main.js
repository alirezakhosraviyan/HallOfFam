import { Dimensions , StyleSheet} from 'react-native';

export default StyleSheet.create({
  grid: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    flexDirection: 'column',
    width: ((Dimensions.get('window').width) / 2),
    height: 150,
  },
});