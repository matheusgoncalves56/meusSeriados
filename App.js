/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, View, Text

} from 'react-native';

import ListaSeriados from './src/components/ListaSeriados'

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={{padding: 10, alignItems: 'center', backgroundColor: '#4d4d4d'}}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Meus Seriados</Text>
        </View>
        <ListaSeriados/>
      </View>
      
    );
  }
}

export const URL_SERVIDOR = 'http://10.0.2.2:3000'