import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShoe } from '../redux/reduxShoe';

export default function Home({ navigation }) {
    const dispatch = useDispatch();
    const { shoe, status, error } = useSelector((state) => state.shoe);

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    // Fetch the shoe (or user) data when the component mounts
    useEffect(() => {
        dispatch(fetchShoe());
    }, [dispatch]);

    const handleLogin = () => {
        if (!user || !password) {
            Alert.alert('Error', 'Please enter both username and password.');
            return;
        }
        // Validate user credentials
        const userName = shoe.find((item) => item.user === user && item.password === password); // Corrected field names
        if (userName) {
            Alert.alert('Success', 'Login successful');
            navigation.navigate('Shoe',{user:user}); 
        } else {
            Alert.alert('Error', 'Invalid username or password.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.login}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 10 }}>Login</Text>
            </View>
            <View>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'black', margin: 10, padding: 5 }}
                    placeholder="Username"
                    value={user}
                    onChangeText={(text) => setUser(text)}
                />
            </View>
            <View>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'black', margin: 10, padding: 5 }}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View>
                <TouchableOpacity
                    style={{ backgroundColor: 'blue', margin: 10, padding: 10 }}
                    onPress={handleLogin}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
