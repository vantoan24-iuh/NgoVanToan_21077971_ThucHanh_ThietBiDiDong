import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  del,
  a,
  Button,
  TouchableOpacity,
  input,
  label,
} from 'react-native';
import { useState } from 'react';

export default function week4_lab02_2c() {
  const [checkedOptions, setCheckedOptions] = useState({
    lowerCase: false,
    upperCase: false,
    number: false,
    specialSymbol: false,
  });
  const [passwordLength, setPasswordLength] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleCheckboxChange = (option) => {
    setCheckedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const generatePassword = () => {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialSymbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';
    if (checkedOptions.lowerCase) characters += lowerCase;
    if (checkedOptions.upperCase) characters += upperCase;
    if (checkedOptions.number) characters += numbers;
    if (checkedOptions.specialSymbol) characters += specialSymbols;

    if (characters.length === 0) return;

    let password = '';
    const length = parseInt(passwordLength, 10) || 8; // Default length to 8 if input is invalid

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.textTitle}> PASSWORD GERERATOR</Text>
        </View>
        <View>
          <input type="password" style={styles.password} value={generatedPassword}
></input>
        </View>
        <View style={styles.lenghtText}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#FFFFFF',
              marginRight: 6,
            }}>
            Password length
          </Text>
          <input type="text" style={styles.text} onChangeText={setPasswordLength}></input>
        </View>
        <View>
          <View style={styles.checkPass}>
            <label style={styles.lable}>Include lower case letters</label>
            <input
              type="checkbox"
              value="option1"
              style={styles.inputcheck}
              checked={checkedOptions.lowerCase}
              onChange={() => handleCheckboxChange('lowerCase')}
            />
          </View>
          <View style={styles.checkPass}>
            <label style={styles.lable}>Include upcase letters</label>
            <input
              type="checkbox"
              value="option1"
              style={styles.inputcheck}
              checked={checkedOptions.upperCase}
              onChange={() => handleCheckboxChange('upperCase')}
            />
          </View>

          <View style={styles.checkPass}>
            <label style={styles.lable}>Include number</label>{' '}
            <input
              type="checkbox"
              value="option1"
              style={styles.inputcheck}
              checked={checkedOptions.number}
              onChange={() => handleCheckboxChange('number')}
            />
          </View>
          <View style={styles.checkPass}>
            <label style={styles.lable}>Include special symbol</label>
            <input
              type="checkbox"
              value="option1"
              style={styles.inputcheck}
              checked={checkedOptions.specialSymbol}
              onChange={() => handleCheckboxChange('specialSymbol')}
            />
          </View>
        </View>
        <View style={styles.sub}>
          <TouchableOpacity style={styles.subPass} onPress={generatePassword}>
            GENERATE PASSWORD
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 360,
    height: 640,
    backgroundColor: '#7878b4',
  },
  content: {
    width: 322,
    height: 655,
    borderRadius: 15,
    backgroundColor: '#23235b',
    top: 19,
    left: 19,
    right: 19,
    bottom: 19,
  },
  textTitle: {
    width: 181,
    height: 64,
    fontSize: 20,
    fontWeight: 700,
    color: '#ffff',
    top: 59,
    left: 80,
  },
  password: {
    width: 275,
    height: 45,
    marginTop: 100,
    marginLeft: 20,
    background: '#151537',
    border: 'none',
    fontSize:16,
    color:'#ffffff'
  },
  lenghtText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 40,
  },
  text: {
    width: 110,
    height: 30,
  },
  checkPass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'arial',
    padding: 15,
  },

  lable: {
    fontSize: 20,
    fontWeight: 700,
    color: '#ffffff',
  },
  inputcheck: {
    width: 30,
    height: 25,
  },
  sub: {
    width: 269,
    height: 55,
    backgroundColor: '#3B3B98',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
    marginLeft: 25,
  },
  subPass: {
    fontSize: 18,
    fontWeight: 700,
    alignItems: 'center',
    color: '#ffffff',
  },
});
