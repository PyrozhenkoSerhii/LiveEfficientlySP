import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

export const GoalFormScreen = ({navigation}) => {
  const [formData, setFormData] = useState({
    title: '',
  });

  const onSubmit = (): void => {
    firestore().collection('test').doc().set({title: formData.title});

    navigation.navigate('GoalList');
  };

  const onPress = (id: string, text: string): void => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: text,
    }));
  };

  return (
    <View>
      <TextInput
        label="title"
        value={formData.title}
        onChangeText={(text) => onPress('title', text)}
      />
      <Button mode="contained" onPress={onSubmit}>
        Submit
      </Button>
    </View>
  );
};
