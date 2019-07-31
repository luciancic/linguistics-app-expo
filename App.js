import { createStackNavigator, createAppContainer } from "react-navigation";
import ListenScreen from './src/components/ListenScreen';
import HomeScreen from './src/components/HomeScreen';
import SpeakScreen from './src/components/SpeakScreen';

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Listen: ListenScreen,
    Speak: SpeakScreen,
});

export default createAppContainer(AppNavigator);
