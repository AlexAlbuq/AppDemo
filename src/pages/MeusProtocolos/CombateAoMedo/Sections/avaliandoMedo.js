import React, { useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AvaliandoMedo(){

  const inputRef = useRef(null);
  
  return (

    <View>
      
      <View style={[styles.viewTopicos]}>
        <Text style={styles.txtTopicos}>
          Avaliando o impacto do medo
        </Text>
      </View>

      <View style={styles.viewLista}>
        <View style={[styles.viewItens]}>
          <Text style = {styles.txtPergunta}>
            07 - O que você está fazendo ou deixando de fazer por causa do medo?
          </Text>
          <TextInput  style={[styles.input, {borderBottomRightRadius: 15}]} multiline 
                      placeholder='Escreva aqui...'
                      textAlignVertical='top' ref={inputRef}
                      onChangeText={ () => {} }
          />
        </View>

        <View style={[styles.viewItens]}>
          <Text style = {styles.txtPergunta}>
            08 - O que acontece de ruim quando você sente esse medo e acredita nele?
          </Text>
          <TextInput  style={[styles.input, {borderBottomRightRadius: 15}]} multiline 
                      placeholder='Escreva aqui...'
                      textAlignVertical='top' ref={inputRef}
                      onChangeText={ () => {} }
          />
        </View>

        <View style={[styles.viewItens, {borderBottomLeftRadius: 15}]}>
          <Text style = {styles.txtPergunta}>
            09 - O que de bom deixa de acontecer quando você sente esse medo e acredita nele?
          </Text>
          <TextInput  style={[styles.input, {borderBottomRightRadius: 15, borderBottomLeftRadius: 15}]} multiline 
                      placeholder='Escreva aqui...'
                      textAlignVertical='top' ref={inputRef}
                      onChangeText={ () => {} }
          />
        </View>
      </View>

    </View>
      
  );
}



const styles = StyleSheet.create({
  viewTopicos: {
    marginTop: 0,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  viewLista: {
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 35,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  txtTopicos: {
    color: '#2E2E2E',
    textAlign: 'left',
    fontSize: 17,
    padding: 2,
    fontWeight: 'bold',
    backgroundColor: '#D9E2ED',
    marginLeft: 10,
    marginRight: 10
  },
  txtPergunta: {
    fontSize: 15,
    padding: 10,
    color: '#2E2E2E'
  },
  viewItens: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderWidth: 0.5,
    borderColor: '#8A8A8A',
    padding: 10,
    fontSize: 13,
    height: 80,
    textAlign: 'left',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15
  },
});
