import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';
import { TextInput } from 'react-native-gesture-handler';

function HomeScreen(props) {

    return <View style={styles.container}>
        <View style={styles.flexView}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Linguistics App</Text>
        </View>
        <View style={styles.flexView}>
            <Button title='Listen' onPress={() => props.navigation.navigate('Listen')} />
        </View>
        <View style={styles.flexView}>
            <Button style={{ flex: 3 }} title='Speak' onPress={() => props.navigation.navigate('Speak')} />
        </View>
        <View style={styles.flexView}>
            <Button title='Collection' onPress={() => props.navigation.navigate('Collection')} />
        </View>
    </View>
}
HomeScreen.navigationOptions = {
    title: 'Home',
    headerStyle: { display: 'none' }
};

function ListenScreen(props) {
    const [text, setText] = useState('');

    return <View style={styles.container}>
        <View style={styles.inputView}>
            <TextInput 
                style={styles.textInput}
                placeholder='Enter your text to hear it.' 
                onChangeText={text => setText(text)} 
                onSubmitEditing={() => {}}
            />
        </View>
        <View style={styles.flexView}>
            <Button title='Home' onPress={() => props.navigation.navigate('Home')} />
        </View>
    </View>
}
ListenScreen.navigationOptions = {
    title: 'Listen',
};

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        title: 'Home'
    },
    Listen: ListenScreen
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    flexView: { 
        flex: 1, 
        justifyContent: 'center' 
    },
    inputView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    textInput: { 
        alignSelf: 'stretch',
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 5,
        margin: 20
    }
});
