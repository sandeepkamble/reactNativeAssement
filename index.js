/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {useEffect} from 'react'
import App from './App';
import {name as appName} from './app.json';
import SplashScreen from 'react-native-splash-screen';
const Main = () => {
    useEffect(() => {
      SplashScreen.hide(); // Hide the splash screen when your app is ready
    }, []);
  
    return <App />;
  };

AppRegistry.registerComponent(appName, () => Main);
