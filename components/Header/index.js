import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

export const HeaderComponent = ({header}) => (
  <View style={styles.header}>
    <Image
      source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
      style={styles.img}
    />
    <Text style={styles.text}>{header}</Text>
  </View>
);
