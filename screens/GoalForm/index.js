import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

export const GoalFormScreen = () => {
  const [formData, setFormData] = useState({
    title: '',
  });

  const onPress = () => {};

  return (
    <View>
      <TextInput
        label="title"
        value={formData.title}
        onChange={(text) => setFormData(text)}
      />
      <Button mode="contained" onPress={onPress}>
        Submit
      </Button>
    </View>
  );
};
