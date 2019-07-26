import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

function HomeScreen(props) {

  return <View style={styles.container}>
    <View style={{padding: 20}}>
      <Text>Open up App.js to start working on your app!?</Text>
    </View>
    <Button title='toListen' onPress={() => props.navigation.navigate('Listen')}>Listen</Button>
  </View>
}
HomeScreen.navigationOptions = {
  title: 'Home',
  headerStyle: { display: 'none' }
};

function ListenScreen(props) {
  return <View style={styles.container}>
    <Text>Enter your text to hear it.</Text>
    <Button title='toHome' onPress={() => props.navigation.navigate('Home')}>Home</Button>
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
    justifyContent: 'center',
  },
});
