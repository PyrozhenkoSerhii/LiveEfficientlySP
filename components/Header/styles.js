import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'darkslateblue',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  img: {
    marginRight: 10,
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
  },
});
