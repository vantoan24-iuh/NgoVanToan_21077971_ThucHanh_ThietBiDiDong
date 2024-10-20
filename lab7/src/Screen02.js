import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, View, TextInput, FlatList, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DATA_KEY = 'jobsData'; // Key for AsyncStorage

const initialData = [
    {
        id: '1',
        image1: require('../assets/mdi_marker-tick.png'),
        job: 'To check email',
        image2: require('../assets/iconamoon_edit-bold.png'),
    },
    {
        id: '2',
        image1: require('../assets/mdi_marker-tick.png'),
        job: 'UI task web page',
        image2: require('../assets/iconamoon_edit-bold.png'),
    },
    {
        id: '3',
        image1: require('../assets/mdi_marker-tick.png'),
        job: 'Learn javascript basic',
        image2: require('../assets/iconamoon_edit-bold.png'),
    },
    {
        id: '4',
        image1: require('../assets/mdi_marker-tick.png'),
        job: 'Learn HTML Advance',
        image2: require('../assets/iconamoon_edit-bold.png'),
    },
    {
        id: '5',
        image1: require('../assets/mdi_marker-tick.png'),
        job: 'Medical App UI',
        image2: require('../assets/iconamoon_edit-bold.png'),
    },
    {
        id: '6',
        image1: require('../assets/mdi_marker-tick.png'),
        job: 'Learn Java',
        image2: require('../assets/iconamoon_edit-bold.png'),
    },
];

export default function Screen02({ navigation, route }) {
    const { userEmail } = route.params;
    const [search, setSearch] = useState('');
    const [listSearch, setListSearch] = useState(initialData); // Start with initial data

    useEffect(() => {
        loadJobs(); // Load jobs when the component mounts
    }, []);

    const loadJobs = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(DATA_KEY);
            const data = jsonValue != null ? JSON.parse(jsonValue) : initialData; // Use initial data if nothing found
            setListSearch(data);
        } catch (e) {
            console.error("Failed to load jobs", e);
        }
    };

    const saveJobs = async (jobs) => {
        try {
            const jsonValue = JSON.stringify(jobs);
            await AsyncStorage.setItem(DATA_KEY, jsonValue);
        } catch (e) {
            console.error("Failed to save jobs", e);
        }
    };

    const handleEditPress = (item) => {
        navigation.navigate('Screen03', { userEmail, job: item, updateJob });
    };

    const handleAddPress = () => {
        navigation.navigate('Screen03', { userEmail, addJob });
    };

    const updateJob = (updatedJob) => {
        const updatedData = listSearch.map((item) =>
            item.id === updatedJob.id ? { ...item, job: updatedJob.job } : item
        );
        setListSearch(updatedData);
        saveJobs(updatedData); // Save updated jobs to AsyncStorage
    };

    const addJob = (newJob) => {
        const newJobs = [
            ...listSearch,
            {
                id: `${listSearch.length + 1}`,
                job: newJob,
                image1: require('../assets/mdi_marker-tick.png'),
                image2: require('../assets/iconamoon_edit-bold.png'),
            },
        ];
        setListSearch(newJobs);
        saveJobs(newJobs); // Save new jobs to AsyncStorage
    };

    const handleSearch = (text) => {
        setSearch(text);
        if (text) {
            const filteredData = listSearch.filter((item) =>
                item.job.toLowerCase().includes(text.toLowerCase())
            );
            setListSearch(filteredData);
        } else {
            loadJobs(); // Reload jobs if search is cleared
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/lui.png')} style={styles.icon} />
                </TouchableOpacity>
                <Image source={require('../assets/Avatar 31.png')} style={styles.avatar} />
                <View style={styles.greetingContainer}>
                    <Text style={styles.greetingText}>Hi {userEmail}</Text>
                    <Text style={styles.subGreetingText}>Have a great day ahead</Text>
                </View>
            </View>

            <View style={styles.searchContainer}>
                <Image source={require('../assets/search.png')} style={styles.searchIcon} />
                <TextInput
                    onChangeText={handleSearch}
                    value={search}
                    placeholder="Search"
                    style={styles.searchInput}
                />
            </View>

            <FlatList
                data={listSearch}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View style={styles.itemRow}>
                            <Image source={item.image1} style={styles.image1} />
                            <Text style={styles.job}>{item.job}</Text>
                            <TouchableOpacity onPress={() => handleEditPress(item)}>
                                <Image source={item.image2} style={styles.image2} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                contentContainerStyle={styles.listContent}
            />

            <View style={styles.footer}>
                <TouchableOpacity onPress={handleAddPress} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    greetingContainer: {
        flex: 1,
    },
    greetingText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subGreetingText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#c4c4c4',
    },
    searchContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
    },
    searchIcon: {
        width: 25,
        height: 25,
        marginRight: 5,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    listContent: {
        paddingVertical: 20,
    },
    itemContainer: {
        marginBottom: 10,
    },
    itemRow: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image1: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    job: {
        fontSize: 18,
        flex: 1,
        color: 'black',
    },
    image2: {
        width: 25,
        height: 25,
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    addButton: {
        backgroundColor: 'aqua',
        borderRadius: 35,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 40,
        fontWeight: '700',
        color: '#fff',
    },
});
