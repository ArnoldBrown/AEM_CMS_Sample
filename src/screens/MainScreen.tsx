import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../types/navigation';

const screenWidth = Dimensions.get('window').width;

const MainScreen = () => {
    const navigation = useNavigation<NavigationProps>();

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ScreenRest')}>
                <Text style={styles.buttonText}>Rest Sample</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ScreenGraphql')}>
                <Text style={styles.buttonText}>Graphql Sample</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007bff',
        padding:15,
        borderRadius: 8,
        alignItems: 'center',
        margin: 20,
        width: screenWidth / 2
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MainScreen;
