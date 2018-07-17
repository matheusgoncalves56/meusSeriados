
import React, { Component } from 'react';
import {
  View, ActivityIndicator, ScrollView
} from 'react-native';
import ItemSeriado from './ItemSeriado';
import axios from 'axios';
import {URL_SERVIDOR} from '../../App';

export default class ListaSeriados extends Component {
  constructor(props){
    super(props);

    this.state = {listaSeriados: [], isLoading: true};
  }

  componentWillMount(){
    axios.get(URL_SERVIDOR)
    .then(response => { this.setState({ listaSeriados: response.data , isLoading: false}); })
    .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      )
    } 

    return (
      <ScrollView>
        {this.state.listaSeriados.map(seriado => (<ItemSeriado key={seriado.id} seriado={seriado}/>))}
      </ScrollView>
    );
  }
}