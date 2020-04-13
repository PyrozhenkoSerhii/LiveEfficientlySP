import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';

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
        placeholder="title"
        value={formData.title}
        onChangeText={(text) => onPress('title', text)}
      />
      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
};
