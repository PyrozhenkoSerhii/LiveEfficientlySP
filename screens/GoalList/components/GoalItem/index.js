import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {styles} from './styles';

export const GoalItemComponent = ({route, goal, onDelete, onPress}) => (
  <TouchableOpacity onPress={onPress(goal.id)}>
    <View style={styles.container}>
      <Text style={styles.text}>{goal.text}</Text>
      <Icon
        name="remove"
        size={26}
        color="firebrick"
        onPress={onDelete(goal.id)}
      />
    </View>
  </TouchableOpacity>
);
