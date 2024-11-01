import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { useReducer } from 'react';
import React from 'react';

const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INC':
            return { count: state.count + 1 };
        case 'DEC':
            return { count: state.count - 1 };
        default:
            return state.count;
    }
};

export default function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <SafeAreaView style={styles.container}>
            <Text>{state.count}</Text>
            <Button onPress={() => dispatch({ type: 'INC' })} title="Tang" />
            <Button onPress={() => dispatch({ type: 'DEC' })} title="Giam" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },

});
