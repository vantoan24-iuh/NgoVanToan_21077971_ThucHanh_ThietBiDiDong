import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './assets/src/home';
import BikeList from './assets/src/bikeList';
import BikeAdd from './assets/src/bikeAdd';
import { Provider } from 'react-redux';
import { store } from './assets/redux/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BikeList"
            component={BikeList}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="BikeAdd"
            component={BikeAdd}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
