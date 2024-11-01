import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, StyleSheet, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
    const [email, setEmail] = useState('');

    const handleEmail = (text) => {
        setEmail(text);
    }

    const handlePress = () => {
        // Pass the email to Screen02
        navigation.navigate('Screen02', { userEmail: email });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ top: 50 }}>
                <Image source={require('../assets/Image95.png')} style={{ width: 200, height: 200 }} />
            </View>
            <View style={{ top: 70 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: 'blue' }}>MANAGE YOUR TASK</Text>
            </View>
            <View style={{ flexDirection: 'row', width: 300, borderWidth: 1, borderRadius: 8, height: 40, alignItems: 'center', padding: 10, top: 150 }}>
                <Image source={require('../assets/Vector.png')} style={{ width: 25, height: 20, marginRight: 5 }} />
                <TextInput placeholder="Enter your name" onChangeText={handleEmail} value={email} />
            </View>
            <View style={{ top: 250 }}>
                <TouchableOpacity onPress={handlePress} style={{ borderWidth: 1, borderRadius: 8, width: 130, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: 'aqua' }}>
                    <Text style={{ fontSize: 17, fontWeight: 700, color: '#ffff' }}>GET START</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        fontFamily: 'Arial',
        alignItems: 'center',
    },
});