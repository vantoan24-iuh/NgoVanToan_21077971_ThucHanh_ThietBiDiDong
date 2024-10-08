import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  button,
  input,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const lab03_1b = () => {
  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
      locations={[0, 0.3, 0.85, 1]}
      style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
        }}>
        <View style={styles.TT}>
          <Text style={styles.code}>CODE</Text>
        </View>
        <View styles={styles.title}>
          <Text style={styles.paragraph}>VERIFICATION</Text>
        </View>
        <View style={styles.titleExp}>
          <Text style={styles.paragraphUnder}>
            Enter ontime password sent on {''} ++849092605798
          </Text>
        </View>
        <View style={styles.mail}>
          
        </View>
        <View style={styles.btntNext}>
          <TouchableOpacity style={styles.Next}>VERIFY CODE</TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  TT: {
    flex: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    top: 20,
  },
  code: {
    width: 160,
    height: 70,
    lineHeight: 70.31,
    fontSize: 60,
    fontWeight: 700,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    height: 58,
  },
  paragraph: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 29.3,
  },
  titleExp: {
    flex: 1,
    justifyContent: 'center',
    height: 36,
  },
  paragraphUnder: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 17.58,
  },
  mail: {
    width: 305,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4c4c4',
    marginLeft: 15,
  },
  iconMail: {
    width: 48,
    height: 35,
    border: 'none',
    backgroundColor: '#c4c4c4',
  },
  textEmail: {
    width: 305,
    height: 40,
    lineHeight: 17.58,
    fontSize: 15,
    fontWeight: 700,
    border: 'none',
    backgroundColor: '#c4c4c4',
  },
  btntNext: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Next: {
    width: 305,
    height: 45,
    backgroundColor: '#E3C000',
    color: '#000000',
    fontSize: 18,
    border: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 700,
    top: -20,
  },
});

export default lab03_1b;
