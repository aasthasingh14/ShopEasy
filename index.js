/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import { Text , View} from 'react-native';
import Header from './src/Components/Header'; 
import ShopList from './src/Components/ShopList';
//import { Header } from 'react-native/Libraries/NewAppScreen';

const App =()=>{
    // return <Text>Hello</Text>
    // return <Header/>
    return (
        <View>
            <Header title="ShopNow"/> 
            <ShopList/>
        </View>
    )
    
}

AppRegistry.registerComponent(appName, () => App);
