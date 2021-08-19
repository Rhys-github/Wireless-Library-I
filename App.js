import * as React from 'react';
import {View,Text,Button,StyleSheet,Platform,StatusBar} from 'react-native';
import SearchScreen from './screens/SearchScreen';
import TransactionScreen from './screens/BookTransactionScreen';
import {createAppContainer}from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component{

render(){
     return(
       <View>
       <AppContainer/>
      </View>
    )
  }
}


var TabNavigator = createSwitchNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)