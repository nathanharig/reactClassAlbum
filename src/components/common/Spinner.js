import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => {
  return (
    <View>
      <ActivityIndicator style={styles.spinnerStyle} />
    </View>

  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export { Spinner };
