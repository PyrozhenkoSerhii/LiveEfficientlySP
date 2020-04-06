/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {GoalDetailsScreen} from './screens/GoalDetails';
import {GoalListScreen} from './screens/GoalList';
import {GoalFormScreen} from './screens/GoalForm';
import {SettingScreen} from './screens/Settings';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={route.name === 'Home' ? 'home' : 'gears'}
              size={size}
              color={color}
            />
          ),
        })}
        tabBarOptions={{
          activeTintColor: '#f4511e',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator
              screenOptions={{
                headerStyle: {backgroundColor: '#f4511e', height: 60},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'},
              }}>
              <HomeStack.Screen
                name="GoalList"
                component={GoalListScreen}
                options={{title: 'Your goals'}}
              />
              <HomeStack.Screen
                name="GoalDetails"
                component={GoalDetailsScreen}
                options={{title: 'Details of the goal'}}
              />
              <HomeStack.Screen
                name="GoalForm"
                component={GoalFormScreen}
                options={{title: 'Create your goal'}}
              />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Settings">{() => <SettingScreen />}</Tab.Screen>
      </Tab.Navigator>
    </View>
  </NavigationContainer>
);

export default App;
