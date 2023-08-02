import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image,
         StatusBar, FlatList, useWindowDimensions, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// O uso do && refere-se a renderização condicional, ou seja, só irá renderizar se satisfizer a condição

const windowWidth = Dimensions.get('window').width;

export default function MapaNucleoInterno(){
    const navigation = useNavigation();
    const {height, width} = useWindowDimensions();
    const [dataProt, setData] = useState('');
    
    const hTitulo = (height/100)*7;
    const hSubTitulo = (height/100)*8;
    const hLista = (height/100)*26;
    const hPainel = (height/100)*42;
    const wQuadroPDA = (width/100)*85;
    const wQuadroTituloPDA = (width/100)*30;
    
    const label01 = '01';
    const label02 = '02';
    const label03 = '03';
    const label04 = '04';
    const label05 = '05';
    
    const ConteudoClicavel = ({item, onPress, backgroundColor, textColor, 
                               heightVal, elevation, icone, iconeTipo}) => (
      <TouchableOpacity 
        onPress={onPress} 
        style={[styles.item, 
                {flexDirection: 'row'},
                {backgroundColor}, 
                {shadowOffset: {width: 0, height: heightVal}},
                {elevation: elevation},
                {borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopRightRadius: 10},
                ]}>
        <Ionicons name={iconeTipo} size={20} color={icone} />
        <Text style={[styles.title, {color: textColor}]}>Preenchido em: {item.data}</Text>
      </TouchableOpacity>
    );
    
    useEffect(()=>{
    
      setData([
        {id: 1, data: '04/02/2022'},
        {id: 2, data: '12/05/2022'},
        {id: 3, data: '23/08/2022'},
        {id: 4, data: '17/07/2022'},
        {id: 5, data: '23/01/2023'},
        {id: 6, data: '19/03/2023'},
      ]);



    }, []);

    const [selectedId, setSelectedId] = useState();
    const renderItem = ({item}) => {
      const backgroundColor = item.id === selectedId ? '#F6F6F6' : '#ffffff';
      const color = item.id === selectedId ? '#000000' : '#808080';
      const icone = item.id === selectedId ? '#475F7F' : '#808080';
      const iconeTipo = item.id === selectedId ? "md-save-sharp" : "md-save-outline";
      const shadowOffset = item.id === selectedId ? 5 : 1;
      const elevation = item.id === selectedId ? 5 : 1;
  
      return (
        <ConteudoClicavel
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
          heightVal={shadowOffset}
          elevation={elevation}
          icone={icone}
          iconeTipo={iconeTipo}
        />
      );
    };

    function novoMapaNucleo(){
      navigation.navigate('NovoMapaNucleoInterno', { nome: 'Dados Mapa', email: 'Mapa Nucloe Interno'})
    }

    return (
      <SafeAreaView style={[styles.container, {backgroundColor: '#D9E2ED'}]}>
        <StatusBar
          barStyle = "dark-content"
          hidden = {false}
          backgroundColor = "#FFF"
          translucent = {false}
          networkActivityIndicatorVisible = {true}
        />
        
        <View style={styles.viewSuperior}>
          
          <TouchableOpacity style={styles.menuDrawer} onPress={ () => navigation.openDrawer() }>
            <MaterialCommunityIcons name="view-dashboard" size={24} color="#ffffff" />
          </TouchableOpacity>
          
          <Image
            source={require('../../../assets/GPSLogoComprimida.png')}
            style={{ width: 100, height: 80, marginTop: 10}}
          />

          <TouchableOpacity style={styles.menuDrawer} onPress={ () => [] }>
            <Ionicons name="help-circle-outline" size={24} color="#ffffff" />
          </TouchableOpacity>

        </View>

        <View style={[styles.barraTitulo, {height: hTitulo}]}>
          <View>
            <TouchableOpacity style={styles.menuDrawer} onPress={ () => navigation.goBack() }>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity> 
          </View>

          <View style={styles.tituloProtocolo}>
            <Text style={styles.textoTitulo}>Mapa de Núcleo Emocional Interno</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.menuDrawer} onPress={ novoMapaNucleo }>
              <Feather name="plus" size={24} color="black" />
            </TouchableOpacity> 
          </View>

        </View>

        { dataProt &&
          <View style={[styles.viewLista, {height: hLista}]}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data={dataProt}
              renderItem={renderItem}
              extraData={selectedId}
            />
          </View>
        }

        { selectedId && 
          <View style={[styles.viewPainel, {height: hPainel}]}>
            <View style={[styles.viewPDA, {flexDirection: 'row', width: width-18}]}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.textoPDATitulo}>
                  NÚCLEO EMOCIONAL INTERNO
                </Text>
                <Text style={styles.textoPDASubTitulo}>
                  Clique ao lado para editar o Mapa completo
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={ () => [] }>
                  <MaterialCommunityIcons name="file-document-edit-outline" size={24} color="#ffffff" />
                </TouchableOpacity>        
              </View>
            </View>
            
            <View style={[styles.containerMapa, ]}>
              <View style={[styles.layer, 
                          { zIndex: -1, width: windowWidth - 170,
                            height: windowWidth - 170, borderColor: '#2E2E2E',
                            borderRadius: windowWidth,}]}>
                <Text style={styles.label}>{label05}</Text>
                <View style={[styles.layer, 
                            { zIndex: -1, width: windowWidth - 200,
                              height: windowWidth - 200, borderColor: '#2E2E2E',
                              borderRadius: windowWidth,}]}>
                  <Text style={styles.label}>{label04}</Text>
                  <View style={[styles.layer, 
                              { zIndex: -1, width: windowWidth - 230,
                                height: windowWidth - 230, borderColor: '#2E2E2E',
                                borderRadius: windowWidth,}]}>
                    <Text style={styles.label}>{label03}</Text>
                    <View style={[styles.layer, 
                                { 
                                  zIndex: -1, width: windowWidth - 260,
                                  height: windowWidth - 260, borderColor: '#2E2E2E',
                                  borderRadius: windowWidth,}]}>
                      <Text style={styles.label}>{label02}</Text>
                      <View style={[styles.layer, 
                                  { 
                                    zIndex: -1, width: windowWidth - 290,
                                    height: windowWidth - 290, borderColor: '#2E2E2E',
                                    borderRadius: windowWidth,}]}>
                        <Text style={styles.label}>{label01}</Text>
                        <View style={[styles.layer, 
                                    { backgroundColor: '#1a98b867',
                                      zIndex: -1, width: windowWidth - 320,
                                      height: windowWidth - 320,
                                      borderRadius: windowWidth,}]}>
                          <View style={styles.viewVoce}>
                            <Text style={styles.labelVoce}>Núcleo</Text>
                            <Text style={styles.labelVoce}>Interno</Text>
                            <Text style={{fontSize: 8}}>Você</Text>
                          </View>
                          
                        </View>                
                      </View>
                    </View>
                  </View>  
                </View>  
              </View>

              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons name="man" size={32} color='#707070' />
                  <Text style={{paddingLeft: 5}}>Pessoa 1</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons name="man" size={32} color='#707070' />
                  <Text style={{paddingLeft: 5}}>Pessoa 2</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons name="man" size={32} color='#707070' />
                  <Text style={{paddingLeft: 5}}>Pessoa 3</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons name="man" size={32} color='#707070' />
                  <Text style={{paddingLeft: 5}}>Pessoa 4</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons name="man" size={32} color='#707070' />
                  <Text style={{paddingLeft: 5}}>Pessoa 5</Text>
                </View>
              </View>

            </View>

          </View>
        }

        { !selectedId && 
          <View style={[styles.viewPainel, {height: hPainel}]}>
            <View style={[styles.viewPDA, {flexDirection: 'row', width: width-18}]}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.textoPDATitulo}>
                  NÚCLEO EMOCIONAL INTERNO
                </Text>
                <Text style={styles.textoPDASubTitulo}>
                  Visão básica do seu núcleo selecionado
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={ () => [] }>
                  <MaterialCommunityIcons name="file-document-edit-outline" size={24} color="#ffffff" />
                </TouchableOpacity>        
              </View>
            </View>
            
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, margin: 30}}>
              <Text>
                Selecione um Mapa já criado na lista acima para ver seu resumo, e clique no ícone de 
                edição para editar.
              </Text>
            </View>
            
          </View>
        }

      </SafeAreaView>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      padding: 10,
    },
    containerMapa: {
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    viewSuperior: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      backgroundColor: '#475F7F',
      paddingTop: 10,
      paddingBottom: 10
    },
    menuDrawer: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin: 10
    },
    viewSessao_01: {
      flexDirection: "row",
      alignItems: 'center',
      padding: 5,
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 2,
      shadowOpacity: 0.4,
      backgroundColor: '#ffffff',
    },
    barraTitulo: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#D9E2ED',
    },
    tituloProtocolo: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10
    },
    textoTitulo: {
      fontSize: 17,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    viewLista: {
      flexDirection: "row",
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 2,
      shadowOpacity: 0.4,
      backgroundColor: '#ffffff',
      elevation: 3,
      borderBottomLeftRadius: 10, 
      borderBottomRightRadius: 10, 
      borderTopRightRadius: 10,
      paddingTop: 10,
      paddingBottom: 10,
    }, 
    item: {
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 10,
      shadowRadius: 2,
      shadowOpacity: 0.4,
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: 17,
      paddingLeft: 5
    },
    viewPainel: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 2,
      shadowOpacity: 0.4,
      backgroundColor: '#ffffff',
      elevation: 3,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20, 
      borderBottomRightRadius: 20, 
      paddingBottom: 10
    }, 
    viewPDA: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: '#475F7F',
      padding: 10,
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 2,
      shadowOpacity: 0.4,
      elevation: 3,
      borderTopRightRadius: 20,
    },
    textoPDATitulo: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold',
    },
    textoPDASubTitulo: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '500',
      textAlign: 'center'
    },
    layer: {
      borderRadius: windowWidth,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      borderWidth: 0.5,
      borderColor: '#000',
      
    },
    label: {
      fontSize: 11,
      color: '#000',
      padding: 3,
      
    },
      labelVoce: {
      fontSize: 9,
      fontWeight: 'bold',
      color: '#000',
    },
    viewVoce:{
      alignItems: 'center',
      justifyContent: 'center'
    },
  });
  