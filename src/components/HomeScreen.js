import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import globalStyles from './globalStyles';

function HomeScreen(props) {
    return <View style={globalStyles.container}>
        <View style={globalStyles.flexView}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Linguistics App</Text>
        </View>
        <View style={globalStyles.flexView}>
            <Button title='Listen' onPress={() => props.navigation.navigate('Listen')} />
        </View>
        <View style={globalStyles.flexView}>
            <Button title='Speak' onPress={() => props.navigation.navigate('Speak')} />
        </View>
        <View style={globalStyles.flexView}>
            <Button title='Collection' onPress={() => props.navigation.navigate('Collection')} />
        </View>
    </View>
}
HomeScreen.navigationOptions = {
    headerStyle: { display: 'none' }
};

export default HomeScreen;
