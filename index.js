import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Home, NextScreen} from '../Shopping/src/component'


const AppNavigator = createStackNavigator(
    {
        Home: {screen: Home, navigationOptions: {header: null}},
        NextScreen: {screen: NextScreen, navigationOptions: {header: null}},
    },
    {
        initialRouteName: 'Home',

    });

const AppContainer = createAppContainer(AppNavigator);
AppRegistry.registerComponent(appName, () => AppContainer);
