import React from 'react';
import {
  StyleSheet, Image, View, Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Screen02 from './src/Screen02';
import Screen03 from './src/Screen03';

const Stack = createStackNavigator();

export default function App(route) {
  return (
    <NavigationContainer style={styles.Navigation}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{ title: ' ',headerShown:false}} 
          />

        <Stack.Screen name="Screen02" component={Screen02}
          options={{
            title: ' ',headerShown:false
          }}
        />
        <Stack.Screen name="Screen03" component={Screen03}
          options={{title: ' ',headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Navigation: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
