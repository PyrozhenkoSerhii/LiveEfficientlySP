import React, {useLayoutEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import firestore from '@react-native-firebase/firestore';

import {useSubscribeToCollection} from '../../services/useSubscribeToCollection';
import {GoalItemComponent} from './components/GoalItem';
import {styles} from './styles';

const fields = ['title'];

export const GoalListScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRight}>
          <Icon name="plus" size={32} color="white" onPress={onAdd} />
        </View>
      ),
    });
  });

  const {data: goals, error} = useSubscribeToCollection('test', fields);

  const onAdd = () => {
    navigation.navigate('GoalForm');
  };

  const onDelete = (id) => () => {
    firestore().collection('test').doc(id).delete();
  };

  const onPress = (id) => () => {
    navigation.navigate('GoalDetails', {goalId: id});
  };

  if (error) {
    console.log(error);
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={goals}
        keyExtractor={(goal) => goal.id.toString()}
        renderItem={({item}) => (
          <GoalItemComponent
            goal={item}
            onDelete={onDelete}
            onPress={onPress}
          />
        )}
      />
    </View>
  );
};
