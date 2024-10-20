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


   //headerRight: () => (<Image source={require('./assets/Icon Button 12.png')} style={{ marginRight: 10 }} />),
            // headerLeft: () => (
            //   <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
            //     <Image source={require('./assets/Avatar 31.png')} style={{ marginRight: 10 }} />
            //     <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            //       <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Hi {userEmail}</Text>
            //       <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#c4c4c4' }}>Have agrate day a head</Text>
            //     </View>
            //   </View>
          // )

          // headerRight: () => (
          //   <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
          //     <Image source={require('./assets/Avatar 31.png')} style={{ marginRight: 10 }} />
          //     <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          //       <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Hi TwinKle</Text>
          //       <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#c4c4c4' }}>Have agrate day a head</Text>
          //     </View>
          //   </View>
          // )