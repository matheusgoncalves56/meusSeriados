
import React, { Component } from 'react';
import {
  Text, View, Image
} from 'react-native';

import {URL_SERVIDOR} from '../../App'

export default class ItemSeriado extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', height: 100, borderWidth: 0.5, padding: 10 }}>
          <Image
            style={{resizeMode: 'cover', width: 150, marginRight: 10 }}
            source={{uri: URL_SERVIDOR + this.props.seriado.img}}
          />
        
        <View style={{flex:1}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{this.props.seriado.nome}</Text>
          <Text style={{fontSize: 16}}>{this.props.seriado.qtdTemporadas} temporada{this.props.seriado.qtdTemporadas > 1 ? 's' : ''}</Text>
        </View>
      </View>
    );
  }
}