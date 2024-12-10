import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addShoe } from '../redux/reduxShoe';

const AddShoe = ({ navigation }) => {
    const dispatch = useDispatch();

    // State to hold input values
    const [promotion, setPromotion] = useState('');
    const [content, setContent] = useState('');
    const [shoeImage, setShoeImage] = useState('');

    // Handle form submission
    const handleSubmit = () => {
        if (!promotion || !content || !shoeImage) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        const newShoe = {
            shoe: shoeImage,
            promotion: promotion,
            content: content,
        };

        dispatch(addShoe(newShoe))
            .then(() => {
                Alert.alert('Success', 'Shoe added successfully');
                navigation.goBack(); // Go back after successful addition
            })
            .catch((error) => {
                Alert.alert('Error', error.message);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Add New Shoe</Text>
            <TextInput
                style={styles.input}
                placeholder="Promotion"
                value={promotion}
                onChangeText={setPromotion}
            />
            <TextInput
                style={styles.input}
                placeholder="Content"
                value={content}
                onChangeText={setContent}
            />
            <TextInput
                style={styles.input}
                placeholder="Image URL"
                value={shoeImage}
                onChangeText={setShoeImage}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: '#FF6347',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AddShoe;
