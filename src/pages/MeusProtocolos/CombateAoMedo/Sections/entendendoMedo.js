import React, { useRef } from 'react';
import { View, Text, TextInput, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity} from 'react-native';
import { Foundation } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import {useFonts,
        Alegreya_400Regular,
        Alegreya_500Medium,
        Alegreya_600SemiBold,
        Alegreya_700Bold,
        Alegreya_800ExtraBold,
        Alegreya_900Black,
        Alegreya_400Regular_Italic,
        Alegreya_500Medium_Italic,
        Alegreya_600SemiBold_Italic,
        Alegreya_700Bold_Italic,
        Alegreya_800ExtraBold_Italic,
        Alegreya_900Black_Italic,
      } from '@expo-google-fonts/alegreya';

export default function EntendendoMedo(){

    const {height, width} = useWindowDimensions();
    const inputRef = useRef(null);

    let [fontsLoaded] = useFonts({
      Alegreya_400Regular,
      Alegreya_500Medium,
      Alegreya_600SemiBold,
      Alegreya_700Bold,
      Alegreya_800ExtraBold,
      Alegreya_900Black,
      Alegreya_400Regular_Italic,
      Alegreya_500Medium_Italic,
      Alegreya_600SemiBold_Italic,
      Alegreya_700Bold_Italic,
      Alegreya_800ExtraBold_Italic,
      Alegreya_900Black_Italic,
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    }
    
    return (
        <View>

          <View style={[styles.viewTopicos, {alignItems: 'center', padding: 20}]}>
            <Text style={styles.txtTitulo}>
              Protocolo de Combate ao Medo
            </Text>
            <Text style={styles.txtFrase}>
              "O medo geralmente é um equívoco e acreditar nele sempre pode ser uma tolice."
            </Text>
            <Text style={styles.txtAutor}>
              Elton Euler
            </Text>
            <View style={{flexDirection: 'row', 
                          alignItems: 'center', 
                          marginLeft: 20, 
                          marginRight: 20, 
                          marginTop: 20}}>
              <View style={{flex: 1, height: 2, backgroundColor: '#475F7F'}} />
            </View>
          </View>

          <View style={styles.viewTopicos}>
            <Text style={styles.txtTopicos}>
              Entendendo o medo
            </Text>
          </View>

          <View style={styles.viewLista}>
            <View style={[styles.viewItens,]}>
              <Text style = {styles.txtPergunta}>
                01 - Você está com medo de que?
              </Text>
              <TextInput  style={[styles.input]} multiline 
                          placeholder='Escreva aqui o medo que você está sentindo'
                          textAlignVertical='top' ref={inputRef}
                          onChangeText={ () => {} }
              />
            </View>

            <View style={[styles.viewItens]}>
              <Text style = {styles.txtPergunta}>
                02 - De onde vem esse medo?
              </Text>
              <TextInput  style={[styles.input]} multiline 
                          placeholder='O que estava acontecendo a primeira vez que 
                                      você sentiu esse medo?'
                          textAlignVertical='top' ref={inputRef}
                          onChangeText={ () => {} }
              />
            </View>

            <View style={[styles.viewItens]}>
              <Text style = {styles.txtPergunta}>
                03 - Quando ele começou?
              </Text>
              <TextInput  style={[styles.input]} multiline 
                          placeholder='Caso não saiba, responda "Não sei"'
                          textAlignVertical='top' ref={inputRef}
                          onChangeText={ () => {} }
              />
            </View>

            <View style={[styles.viewItens]}>
              <Text style = {styles.txtPergunta}>
                04 - Com quem você aprendeu isso?
              </Text>
              <TextInput  style={[styles.input]} multiline 
                          placeholder='Caso não saiba, responda "Não sei"'
                          textAlignVertical='top' ref={inputRef}
                          onChangeText={ () => {} }
              />
            </View>

            <View style={[styles.viewItens]}>
              <Text style = {styles.txtPergunta}>
                05 - Onde essa pessoa está no seu núcleo?
              </Text>
              <TextInput  style={[styles.input, {borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]} multiline 
                          placeholder='Escreva aqui...'
                          textAlignVertical='top' ref={inputRef}
                          onChangeText={ () => {} }
              />

              <View style={styles.viewLupasAll}>
                <TouchableOpacity>
                  <View style={styles.viewLupa}>
                    <Foundation name="magnifying-glass" size={24} color='#2E2E2E' />
                    <Text style={styles.textoLupa}>Veja aqui quem está no seu núcleo</Text>
                  </View>
                </TouchableOpacity>

              </View>

            </View>

            <View style={[styles.viewItens]}>
              <Text style = {styles.txtPergunta}>
                06 - Alguém alimenta esse medo? Quem?
              </Text>
              <TextInput  style={[styles.input]} multiline 
                          placeholder='Escreva aqui...'
                          textAlignVertical='top' ref={inputRef}
                          onChangeText={ () => {} }
              />
            </View>

            <View style={[styles.viewItens, {borderBottomLeftRadius: 15}]}>
              <Text style = {styles.txtPergunta}>
                07 - Onde essa pessoa está no seu núcleo?
              </Text>
              <TextInput  style={[styles.input, {borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]} multiline 
                          placeholder='Escreva aqui...'
                          textAlignVertical='top' ref={inputRef}
                          onChangeText={ () => {} }
              />

              <View style={styles.viewLupasAll}>
                <TouchableOpacity>
                  <View style={styles.viewLupa}>
                    <Foundation name="magnifying-glass" size={24} color='#2E2E2E' />
                    <Text style={styles.textoLupa}>Veja aqui quem está no seu núcleo</Text>
                  </View>
                </TouchableOpacity>

              </View>

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
  txtTitulo: {
    color: '#2E2E2E',
    fontFamily: 'Cochin',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Alegreya_700Bold'
  },
  txtFrase: {
    color: '#2E2E2E',
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
    textAlign: 'center'
  },
  txtAutor: {
    color: '#2E2E2E',
    fontStyle: 'italic',
    fontSize: 11,
    paddingTop: 5
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
  viewLupasAll: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#8A8A8A',
  },
  viewLupa: {
    flexDirection: 'row',
    margin: 5,
  },
  textoLupa: {
    paddingLeft: 5,
    color: '#2E2E2E'
  },

});
