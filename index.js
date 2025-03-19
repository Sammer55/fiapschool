/**
 * @format
 */

import { AppRegistry, TouchableOpacity, Text } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

TouchableOpacity.defaultProps = {};
TouchableOpacity.defaultProps.activeOpacity = 0.6;
Text.defaultProps = {};
Text.defaultProps.selectionColor = 'red';

AppRegistry.registerComponent(appName, () => App);
