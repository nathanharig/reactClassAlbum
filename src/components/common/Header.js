// Import Libraries for making a Componeny
import React from 'react';
import { Text, View } from 'react-native';

//Make a Component
const Header = (props) => {

  return (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
  </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#d3d3d3',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 50,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//Make component available to other parts of the app
export { Header };
