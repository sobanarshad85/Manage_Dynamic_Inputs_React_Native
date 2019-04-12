/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import App from './src/modules/navigators/MainNavigator'
// import App from './src/modules/ActionsScreen/view'
import { name as appName } from './app.json';
import bgMessaging from './bgMessaging';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging); // <-- Add this line