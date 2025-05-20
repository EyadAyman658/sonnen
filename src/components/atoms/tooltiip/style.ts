import { StyleSheet } from 'react-native';


export const createStyles = () =>
  StyleSheet.create({
     tooltip: {
    position: 'absolute',
    backgroundColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 10,
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
  });

  