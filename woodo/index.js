/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CameraRollDemo from './src/components/cameraRollDemo';
import { StackNavigator } from 'react-navigation';


const Navigation = StackNavigator({
    App: { screen : App },
    CameraRollDemo: { screen: cameraRollDemo }
})


AppRegistry.registerComponent(appName, () => Navigation);
