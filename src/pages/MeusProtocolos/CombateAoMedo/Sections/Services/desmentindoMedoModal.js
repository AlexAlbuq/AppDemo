import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DesmentindoMedoModal() {

  return (

    <View style={{
      backgroundColor: "#292929",
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    }}>


      <View style={styles.viewTextos}>
        <Text style={styles.textoMaior}>
          Compensa usar
        </Text>
      </View>

      <View style={styles.viewTextos}>
        <Text style={styles.textoMedio}>
          Com os preços: {this.}
        </Text>
      </View>

      <View style={styles.viewValores}>
        <Text style={styles.textos}>
          Álcool:
        </Text>
      </View>
      <View style={styles.viewValores}>
        <Text style={styles.textos}>
          Gasolina:
        </Text>
      </View>

      <View style={styles.viewBotao}>
        <TouchableOpacity style={styles.btn} onPress={this}>
          <Text style={styles.textoBotao}>Calcular novamente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoMaior: {
    flex: 1,
    color: '#257d03',
    fontSize: 23,
    margin:5,
    textAlign: 'center',
    padding: 15
  },
  textoMedio: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    margin:5,
    textAlign: 'center',
    padding: 5
  },
  textos: {
    flex: 1,
    color: '#fff',
    fontSize: 13,
    margin:5,
    textAlign: 'center',
    padding: 15
  },
  viewTextos: {
    flexDirection: 'row',
    alignItems: 'flex-start' ,
    marginLeft: 15,
    marginRight: 15
  },
  viewValores: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});