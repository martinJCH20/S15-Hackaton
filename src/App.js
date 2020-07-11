import React, { Component } from 'react'
import {Provider} from 'react-redux';
import {ReduxNetworkProvider} from 'react-native-offline';
import getStore from './store';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerStackNavigator } from './Router/drawer'

const store = getStore();

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

    render(){
         return (
                // <NavigationContainer>
                //     <DrawerStackNavigator />
                // </NavigationContainer>
              <Provider store={store}>
              <ReduxNetworkProvider>
                <NavigationContainer>
                  <DrawerStackNavigator />
                </NavigationContainer>
              </ReduxNetworkProvider>
            </Provider>
          )
    }
}