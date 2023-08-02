import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image,
         StatusBar, FlatList, useWindowDimensions, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// O uso do && refere-se a renderização condicional, ou seja, só irá renderizar se satisfizer a condição

export default function CombateAoMedo(){
    const navigation = useNavigation();
    const {height, width} = useWindowDimensions();
    const [dataProt, setData] = useState('');
    
    const hTitulo = (height/100)*7;
    const hSubTitulo = (height/100)*8;
    const hLista = (height/100)*26;
    const hPainel = (height/100)*42;
    const wQuadroPDA = (width/100)*85;
    const wQuadroTituloPDA = (width/100)*30;
    
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

    function novoProtocolo(){
      navigation.navigate('NovoProtocoloMedo', { nome: 'Dados Protocolo', email: 'Protocolo do Medo'})
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
            <Text style={styles.textoTitulo}>Protocolo de Combate ao Medo</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.menuDrawer} onPress={ novoProtocolo }>
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
                  PDA MEMORÁVEL
                </Text>
                <Text style={styles.textoPDASubTitulo}>
                  Marcapassos de um futuro guiado sem medo
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={ () => [] }>
                  <MaterialCommunityIcons name="file-document-edit-outline" size={24} color="#ffffff" />
                </TouchableOpacity>        
              </View>
            </View>
            
            <ScrollView>
              <View  style={[styles.quadroPDA, {width: wQuadroPDA}]}>
                <View style={styles.destaquesPDA}>
                  <View style={[styles.quadroTituloPDA, {width: wQuadroTituloPDA}]}>
                    <Text style={styles.txtValor}>Percepção</Text>
                  </View>
                  <View style={[styles.quadroTituloPDA, {width: wQuadroTituloPDA}]}>
                    <Text style={styles.txtValor}>12/09/2022</Text>
                  </View>
                </View>

                <View style={styles.viewDescricao}>
                  <Text style={styles.txtDescricao}>
                    Aqui estará o texto incluído pelo usuário quando preencheu o protocolo 
                    do medo na data que foi selecionada na lista superior da tela.
                  </Text>
                </View>
              </View>

              <View  style={[styles.quadroPDA, {width: wQuadroPDA}]}>
                <View style={styles.destaquesPDA}>
                  <View style={[styles.quadroTituloPDA, {width: wQuadroTituloPDA}]}>
                    <Text style={styles.txtValor}>Decisão</Text>
                  </View>
                  <View style={[styles.quadroTituloPDA, {width: wQuadroTituloPDA}]}>
                    <Text style={styles.txtValor}>14/09/2022</Text>
                  </View>
                </View>

                <View style={styles.viewDescricao}>
                  <Text style={styles.txtDescricao}>
                    Aqui estará o texto incluído pelo usuário quando preencheu o protocolo 
                    do medo na data que foi selecionada na lista superior da tela.
                  </Text>
                </View>
              </View>

              <View  style={[styles.quadroPDA, {width: wQuadroPDA}]}>
                <View style={styles.destaquesPDA}>
                  <View style={[styles.quadroTituloPDA, {width: wQuadroTituloPDA}]}>
                    <Text style={styles.txtValor}>Ação</Text>
                  </View>
                  <View style={[styles.quadroTituloPDA, {width: wQuadroTituloPDA}]}>
                    <Text style={styles.txtValor}>15/09/2022</Text>
                  </View>
                </View>

                <View style={styles.viewDescricao}>
                  <Text style={styles.txtDescricao}>
                    Aqui estará o texto incluído pelo usuário quando preencheu o protocolo 
                    do medo na data que foi selecionada na lista superior da tela.
                  </Text>
                </View>
              </View>

            </ScrollView>
          </View>
        }

        { !selectedId && 
          <View style={[styles.viewPainel, {height: hPainel}]}>
            <View style={[styles.viewPDA, {flexDirection: 'row', width: width-18}]}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.textoPDATitulo}>
                  PDA MEMORÁVEL
                </Text>
                <Text style={styles.textoPDASubTitulo}>
                  Marcapassos de um futuro guiado sem medo
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
                Edite um protocolo já criado, selecionando a data na lista acima, ou crie um 
                novo protocolo, selecionando o sinal de + na parte superior direita da tela!
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
      fontWeight: 'bold'
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
      justifyContent: 'space-between',
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
    },
    txtValor: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#2E2E2E',
      textAlign: 'center',
    },
    txtDescricao: {
      fontSize: 11,
      fontWeight: '300',
      color: '#2E2E2E',
      textAlign: 'left',
    },
    viewDescricao:{
      //width: '55%',
      padding: 10,
    },
    quadroPDA: {
      justifyContent: 'center',
      padding: 5,
      borderRadius: 15,
      borderTopLeftRadius: 0,
      borderWidth: 0.5,
      borderColor: '#808080',
      margin: 10,
      backgroundColor: '#F6F6F6'
    },
    quadroTituloPDA: {
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 15,
      borderTopLeftRadius: 0,
      borderWidth: 0.5,
      borderColor: '#808080',
      margin: 10
    },
    destaquesPDA: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  });
  