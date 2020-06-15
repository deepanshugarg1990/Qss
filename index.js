import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Home} from '../Shopping/src/component'


const AppNavigator = createStackNavigator(
    {
        Home: {screen: Home, navigationOptions: {header: null}},
    },
    {
        initialRouteName: 'Home',

    });

const AppContainer = createAppContainer(AppNavigator);
AppRegistry.registerComponent(appName, () => AppContainer);
