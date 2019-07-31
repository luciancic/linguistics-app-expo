import React, { useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';
import { TextInput } from 'react-native-gesture-handler';
import ListenScreen from './src/components/ListenScreen';
import HomeScreen from './src/components/HomeScreen';

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Listen: ListenScreen
});

export default createAppContainer(AppNavigator);
