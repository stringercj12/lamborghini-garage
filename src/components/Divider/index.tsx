import React from 'react';

import { styles } from './styles';
import { View } from 'react-native';

export function Divider() {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.divider} />
    </View>
  );
}