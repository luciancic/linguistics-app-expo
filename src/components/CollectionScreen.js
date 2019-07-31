import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import globalStyles from './globalStyles';

function CollectionScreen(props) {
    return <View style={globalStyles.container}>
        <View style={globalStyles.flexView}>
            <Text>No collections found</Text>
        </View>
    </View>
}
CollectionScreen.navigationOptions = {
    title: 'Collection'
};

export default CollectionScreen;
