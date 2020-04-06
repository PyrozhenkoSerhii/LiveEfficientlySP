import React from 'react';
import {View, Text} from 'react-native';

export const GoalDetailsScreen = ({route}) => {
  const {goalId} = route.params;

  return (
    <View>
      <Text>{`Details-${goalId}`}</Text>
    </View>
  );
};
