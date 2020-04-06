import React, {useState, useLayoutEffect, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import firestore, {firebase} from '@react-native-firebase/firestore';

import {GoalItemComponent} from './components/GoalItem';
import {mockGoals} from '../../mocks/goals';
import {styles} from './styles';

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

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    firestore()
      .collection('test')
      .onSnapshot(
        (querySnapshot) => {
          setGoals(
            querySnapshot.docs.map((doc) => {
              const data = doc.data();
              return {
                id: doc.id,
                title: data.title,
              };
            }),
          );
        },
        (err) => console.log(err),
      );
  }, []);

  const onAdd = () => {
    navigation.navigate('GoalForm');
  };

  const onDelete = (id) => () => {
    firestore().collection('test').doc(id).delete();
  };

  const onPress = (id) => () => {
    navigation.navigate('GoalDetails', {goalId: id});
  };

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
