import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShoe, deleteShoe,editShoe } from '../redux/reduxShoe';

export default function Shoe({ navigation, route }) {
    const dispatch = useDispatch();
    const { shoe, status, error } = useSelector((state) => state.shoe);
    const user = route.params.user;

    useEffect(() => {
        dispatch(fetchShoe());
    }, [dispatch]);

    if (status === 'loading') {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.message}>Loading...</Text>
            </SafeAreaView>
        );
    }

    if (status === 'failed') {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.message}>Error: {error}</Text>
            </SafeAreaView>
        );
    }

    // Delete shoe
    const handelDeleteShoe = (id) => {
        dispatch(deleteShoe(id));
    }
    // edit shoe
    const handelEditShoe = (id) => {
        dispatch(editShoe(id));
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginBottom: 20 }}>
                {/* Display the logged-in user's name */}
                <Text style={styles.userName}>Hello, {user}!</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={styles.header}>Shoe Collection</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        marginBottom: 20, marginTop: 20,
                    }}>Back</Text>
                </TouchableOpacity>

            </View>

            <FlatList
                data={shoe}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image
                            source={{ uri: item.shoe }}
                            style={styles.image}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.promotion}>{item.promotion}</Text>
                            <Text style={styles.content}>{item.content}</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{
                                backgroundColor: 'red',
                                borderRadius: 8,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 10,
                            }} onPress={() => handelDeleteShoe(item.id)}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                backgroundColor: 'blue',
                                borderRadius: 8,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} onPress={() => handelEditShoe(item.id)}>
                                <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
            />
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddShoe')}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 10,
        marginRight: 10,
    },
    promotion: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    content: {
        fontSize: 14,
        color: '#666',
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#FF6347',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
