import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';

export default function App() {
  return (
    <View >
      <AppContainer/>
    </View>
  );
}
const appStackNavigator = createStackNavigator(
  {
  Home:{screen: HomeScreen},
  Details:{screen: DetailsScreen}
},
{
  initialRouteName: "Home"
}
)
const AppContainer = createAppContainer(appStackNavigator) 

