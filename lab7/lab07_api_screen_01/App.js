import React, { useState, useEffect } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  TextInput,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./img/Image95.png')} style={styles.imgheader} />
      <Text style={styles.titleHeader}>MANAGE YOUR {'\n'} TASK</Text>
      <View style={styles.textMail}>
        <Image source={require('./img/Frame.png')} />
        <TextInput
          placeholder="Enter your name"
          style={{ height: 40, width: 310, border: 'none' }}
        />
      </View>
      <TouchableOpacity style={{border:'none', backgroundColor:'#00BDD6', borderRadius:8, marginTop:25,fontSize:18,color:'#ffff',width:110,height:30,alignItems:'center',justifyContent:'center'}}>Get start -></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    marginLeft: 20,
    marginRight: 20,
    fontFamily: 'Arial',
    top: 50,
    alignItems:'center',
  },
  imgheader: {
    width: 200,
    height: 200,
  },
  titleHeader: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8353E2',
    marginTop:20
  },
  textMail: {
    flexDirection: 'row',
    height: 43,
    border: 'solid #9095A0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
});
