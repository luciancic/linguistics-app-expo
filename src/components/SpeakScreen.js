import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import globalStyles from './globalStyles';

function SpeakScreen(props) {
    return <View style={globalStyles.container}>
        <View style={globalStyles.flexView}>
            <Button title='Start recording' />
        </View>
    </View>
}
SpeakScreen.navigationOptions = {
    title: 'Speak',
};

export default SpeakScreen;
