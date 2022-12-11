import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './pages/Start';
import Finish from './pages/Finish';
import ModeSelection from './pages/ModeSelection';
import HowTo from './pages/HowTo';
import PlayScreen from './pages/PlayScreen';
import DailyGoal from './pages/DailyGoal';
import RandomGoal from './pages/RandomGoal';

const Stack = createStackNavigator();

export default class NavExample extends Component {
    render() {
        return (
            <NavigationContainer>
		          <Stack.Navigator>
		            <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
		            <Stack.Screen name="ModeSelection" component={ModeSelection} options={{ headerShown: true }}/>
		  
			      <Stack.Screen name="HowTo" component={HowTo} options={{ headerShown: true }}/>
			      <Stack.Screen name="Finish" component={Finish} options={{ headerShown: true }}/>
			      <Stack.Screen name="PlayScreen" component={PlayScreen} options={{ headerShown: true }}/>
			      <Stack.Screen name="DailyGoal" component={DailyGoal} options={{ headerShown: true }}/>
			      <Stack.Screen name="RandomGoal" component={RandomGoal} options={{ headerShown: true }}/>   
              </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

