import React, {useState, useLayoutEffect} from 'react';
import {View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {GoalItemComponent} from './components/GoalItem';
import {mockGoals} from '../../mocks/goals';
import {styles} from './styles';

export const GoalListScreen = ({navigation}) => {
  const [goals, setGoals] = useState(mockGoals);

  const onAdd = () => {
    navigation.navigate('GoalForm');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRight}>
          <Icon name="plus" size={32} color="white" onPress={onAdd} />
        </View>
      ),
    });
  });

  const onDelete = (id) => () => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
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
