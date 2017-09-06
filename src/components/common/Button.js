import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Touchable Opacity needed for clicking to take place
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
//Touchable Opactiy onPress is running a function from parent (AlbumDetail)
  return (
    <TouchableOpacity
      onPress={onPress} style={buttonStyle}
    >
    <Text style={textStyle}>
      {children}
    </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
