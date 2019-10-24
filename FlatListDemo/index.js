/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FlatListScreen from './pages/FlatListScreen';

const MainStackNav = createStackNavigator({
    App: {
        screen: App,
        navigationOptions: {
            title: '首页',
        }
    },
    FlatListScreen: {
        screen: FlatListScreen,
        navigationOptions: {
            title: 'FlatList',
        }
    }
}, {

});
const RootContainer = createAppContainer(MainStackNav);

AppRegistry.registerComponent(appName, () => RootContainer);
