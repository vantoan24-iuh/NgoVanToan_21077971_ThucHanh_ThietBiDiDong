import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './assets/Page/Home';
import Shoe from './assets/Page/Shoe';
import { Provider } from 'react-redux';
import store from './assets/redux/store';
import AddShoe from './assets/Page/AddShoe';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Shoe" component={Shoe} options={{ headerShown: false }} />
          <Stack.Screen name="AddShoe" component={AddShoe} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}
