import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen03({ navigation, route }) {
    const { userEmail, job, updateJob, addJob } = route.params; // Receive addJob if exists
    const [editedJob, setEditedJob] = useState(job ? job.job : ''); // Initialize state with current job or empty for new job

    const handleFinish = () => {
        if (addJob) {
            addJob(editedJob); // Add the new job if addJob is passed
        } else if (job) {
            updateJob({ ...job, job: editedJob }); // Update existing job
        }
        navigation.goBack(); // Navigate back to Screen02
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/Avatar31.png')} style={styles.avatar} />
                <View style={styles.greeting}>
                    <Text style={styles.greetingText}>Hi {userEmail}</Text>
                    <Text style={styles.subGreetingText}>Have a great day ahead</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/lui.png')} style={styles.goBackIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>ADD YOUR JOB</Text>

                <View style={styles.inputContainer}>
                    <Image source={require('../assets/fxemoji_note.png')} style={styles.inputIcon} />
                    <TextInput
                        style={styles.textInput}
                        value={editedJob}
                        onChangeText={setEditedJob}
                        placeholder="Input your job"
                    />
                </View>

                <TouchableOpacity onPress={handleFinish} style={styles.finishButton}>
                    <Text style={styles.finishButtonText}>FINISH</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Image source={require('../assets/Image95.png')} style={styles.footerImage} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginTop: 20,
        justifyContent: 'space-between',
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    greeting: {
        flex: 1,
        marginLeft: 10,
    },
    greetingText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subGreetingText: {
        fontSize: 15,
        color: '#c4c4c4',
    },
    goBackIcon: {
        width: 25,
        height: 25,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#c4c4c4',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        marginBottom: 20,
    },
    inputIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
    },
    finishButton: {
        backgroundColor: 'aqua',
        borderRadius: 8,
        width: 130,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    finishButtonText: {
        fontSize: 17,
        fontWeight: '700',
        color: '#fff',
    },
    footer: {
        flex: 1,
        // justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },
    footerImage: {
    },
});
