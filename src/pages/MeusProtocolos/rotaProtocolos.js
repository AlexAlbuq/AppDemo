import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,
         SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RotaProtocolos(){
    const navigation = useNavigation();

    function goProCombateAoMedo(){
      navigation.navigate('CombateAoMedo');
    }
    function goMapaNucleoInterno(){
      navigation.navigate('MapaNucleoInterno');
    }

    return (
      <SafeAreaView style={[styles.container, {backgroundColor: '#ffffff'}]}>
        <StatusBar
          barStyle = "dark-content"
          hidden = {false}
          backgroundColor = "#ffffff"
          translucent = {false}
          networkActivityIndicatorVisible = {true}
        />
        
        <View style={styles.viewSuperior}>
          
          <TouchableOpacity style={styles.menuDrawer} onPress={ () => navigation.openDrawer() }>
            <MaterialCommunityIcons name="view-dashboard" size={24} color="#ffffff" />
          </TouchableOpacity>
          
          <Image
            source={require('../../assets/GPSLogoComprimida.png')}
            style={{ width: 100, height: 80, marginTop: 20}}
          />

          <TouchableOpacity style={styles.menuDrawer} onPress={ () => [] }>
            <Ionicons name="help-circle-outline" size={24} color="#ffffff" />
          </TouchableOpacity>

        </View>

        <View style={styles.viewPerfil}>
          
          <Text style={styles.textoPerfil}>
            Olá, Alexandre Albuquerque!
          </Text>

          <Image
            source={require('../../assets/ImagemPerfilAlexandre.png')}
            style={styles.fotoPerfil}
          />

        </View>
        
        <View style={styles.viewTituloFundo}>
          <View style={styles.viewTitulo}>
            <Text style={styles.txtSubTitulos}>Protocolos e Ferramentas</Text>
          </View>
        </View>

        <ScrollView 
          style={styles.viewCorpo}
          showsVerticalScrollIndicator={false}        
        >

         
            <TouchableOpacity style={styles.viewBotaoMaior}>
              <View style={styles.btnPDAs1}>
                <Text style={styles.txtTitulo}>Análise de Envolvimento em</Text>
                <Text style={styles.txtValor}>Núcleo Externo</Text>
              </View>
              <View style={styles.viewDescricao}>
                <Text style={styles.txtDescricao}>
                  Para cada pessoa que você interfere no núcleo dela, preencha
                  um formulário desse.
                </Text>
              </View>
              <View style={styles.iconeHelp}>
                <TouchableOpacity onPress={ () => [] }>
                  <MaterialCommunityIcons name="numeric-1-circle-outline" size={24} color="#ff0404" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewBotaoMaior}>
              <View style={styles.btnPDAs1}>
                <Text style={styles.txtTitulo}>Mapa de Núcleo Emocional</Text>
                <Text style={styles.txtValor}>Externo</Text>
              </View>
              <View style={styles.viewDescricao}>
                <Text style={styles.txtDescricao}>
                  Identificando na vida de quem você não deveria, mas está interferindo
                  nas emoções e no PDA delas.
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewBotaoMaior} onPress={ goMapaNucleoInterno }>
              <View style={styles.btnPDAs1}>
                <Text style={styles.txtTitulo}>Mapa de Núcleo Emocional</Text>
                <Text style={styles.txtValor}>Interno</Text>
              </View>
              <View style={styles.viewDescricao}>
                <Text style={styles.txtDescricao}>
                  Identificando quem não deveria, mas está interferindo nas suas 
                  emoções e no seu PDA.
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewBotaoMaior} onPress={ goProCombateAoMedo }>
              <View style={styles.btnPDAs1}>
                <Text style={styles.txtTitulo}>Protocolo de Combate ao</Text>
                <Text style={styles.txtValor}>Medo</Text>
              </View>
              <View style={styles.viewDescricao}>
                <Text style={styles.txtDescricao}>
                  Preencha um formulário desse para cada medo que você identificou. Daqui 
                  pra frente faça uso dessa ferramenta toda vez que você se deparar com o medo.
                </Text>
              </View>
              <View style={styles.iconeHelp}>
                <TouchableOpacity onPress={ () => [] }>
                  <MaterialCommunityIcons name="numeric-3-circle-outline" size={24} color="#ff0404" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewBotaoMaior}>
              <View style={styles.btnPDAs1}>
                <Text style={styles.txtTitulo}>Protocolo de Proteção</Text>
                <Text style={styles.txtValor}>Emocional</Text>
              </View>
              <View style={styles.viewDescricao}>
                <Text style={styles.txtDescricao}>
                  Utilize este material em conjunto com o Protocolo de Combate à Dependência
                  Emocional Ativa para se proteger de recaídas e passiva para se proteger
                  de insistência de invasão de núcleo.
                </Text>
              </View>
              <View style={styles.iconeHelp}>
                <TouchableOpacity onPress={ () => [] }>
                  <MaterialCommunityIcons name="numeric-9-plus-circle-outline" size={24} color="#ff0404" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewBotaoMaior}>
              <View style={styles.btnPDAs1}>
                <Text style={styles.txtTitulo}>Contraste de</Text>
                <Text style={styles.txtValor}>Controle</Text>
              </View>
              <View style={styles.viewDescricao}>
                <Text style={styles.txtDescricao}>
                  Responda as perguntas desta ferramenta pensando em como você estava antes
                  de iniciar o Detox de Controle e como você está depopis de concluir o 
                  protocolo de Dependência Emocional.
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewBotaoMaior}>
              <View style={styles.btnPDAs1}>
                <Text style={styles.txtTitulo}>Combatendo a Dependência Emocional Passiva em</Text>
                <Text style={styles.txtValor}>Núcleo Interno</Text>
              </View>
              <View style={styles.viewDescricao}>
                <Text style={styles.txtDescricao}>
                  Aqui você encontrará um formulário aberto para cada pessoa que você inseriu
                  no Núcleo Interno. Preencha todos os dados do formulário.
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewBotaoMaior}>
              <View style={styles.btnPDAs1}>
                <Text style={styles.txtTitulo}>Análise de Envolvimento em</Text>
                <Text style={styles.txtValor}>Núcleo Interno</Text>
              </View>
              <View style={styles.viewDescricao}>
                <Text style={styles.txtDescricao}>
                  Aqui você encontrará um formulário aberto para cada pessoa que você inseriu
                  no Núcleo Interno. Preencha todos os dados do formulário.
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewBotaoMaior}>
              <View style={styles.btnPDAs1}>
                <Text style={styles.txtTitulo}>Combatendo a Dependência Emocional Ativa em</Text>
                <Text style={styles.txtValor}>Núcleo Externo</Text>
              </View>
              <View style={styles.viewDescricao}>
                <Text style={styles.txtDescricao}>
                  Aqui você encontrará um formulário aberto para cada pessoa que você inseriu
                  no Núcleo Externo.
                </Text>
              </View>
            </TouchableOpacity>

       </ScrollView>

      </SafeAreaView>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      padding: 10,
    },
    viewSuperior: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      backgroundColor: '#475F7F',
      paddingTop: 10,
      
    },
    viewPerfil: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      backgroundColor: '#475F7F',
      paddingTop: 0,
      paddingBottom: 20,
      borderBottomLeftRadius: 80,

    },
    textoPerfil:{
      fontSize: 17,
      fontWeight: '400',
      color: '#fff',
      paddingRight: 30,
      paddingBottom:5
    },
    fotoPerfil:{
      width: 50, 
      height: 50,
      marginRight: 20,
    },
    menuDrawer: {
      margin: 10
    },
    viewMenuDrawer: {
      backgroundColor: '#FFF',
    },
    viewCorpo: {
      flex: 1,
      backgroundColor: '#F2F2F2',
    },
    viewTituloFundo: {
      backgroundColor: '#475F7F',
    },
    viewTitulo: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      height: 55,
      padding: 5,
      backgroundColor: '#ffffff',
      borderTopRightRadius: 80

    },
    viewBotaoMaior: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'flex-start',
      margin: 10,
      height: 90,
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 2,
      shadowOpacity: 0.4,
      backgroundColor: '#ffffff',
      elevation: 3,
      borderRadius: 20,
   },    
    txtTitulo: {
      fontSize: 12,
      fontWeight: '300',
      color: '#ffffff',
      paddingBottom: 10,
      textAlign: 'center',
    },
    txtValor: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign: 'center',
    },
    txtDescricao: {
      fontSize: 11,
      fontWeight: '300',
      color: '#202020',
      textAlign: 'left',
    },
    viewDescricao:{
      width: '55%',
      padding: 10,
      //backgroundColor: '#f8bc18',
    },
    iconeHelp:{
      flex: 1,
      width: '5%',
      marginTop: -68,      
    },
    btnPDAs1: {
      height: 70,
      width: '40%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      backgroundColor: '#475F7F',
      borderRadius: 15,
      borderTopLeftRadius: 0,
      marginTop: -30,
      marginLeft: -5,
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 2,
      shadowOpacity: 0.4,
      elevation: 8
      
    },
    txtSubTitulos: {
      paddingLeft: 5,
      color: '#2E2E2E',
      fontSize: 19,
      fontWeight: '500'
    },

    
  });
  