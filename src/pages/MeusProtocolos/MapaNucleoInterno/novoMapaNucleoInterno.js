import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Keyboard,
         StatusBar, useWindowDimensions, PanResponder, Image, TextInput, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const DraggableElement = ({ initialPosition, color, nome, icone }) => {
  const [position, setPosition] = useState(initialPosition);
  const [gestureOffset, setGestureOffset] = useState({ x: 0, y: 0 });

  const handleTouchStart = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setGestureOffset({ x: locationX - position.x, y: locationY - position.y });
  };

  const handleTouchMove = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setPosition({ x: locationX - gestureOffset.x, y: locationY - gestureOffset.y });
  };

  const handleTouchEnd = () => {
    setGestureOffset({ x: 0, y: 0 });
  };

  return (
    <View
      style={[styles.draggableElement, { left: position.x, top: position.y }]}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <Ionicons name={icone} size={32} color={color} />
      <Text style={{color: '#000', fontSize: 11}}>{nome}</Text>
    </View>
  );
};

export default function NovoMapaNucleoInterno(){
    const navigation = useNavigation();
    const {height, width} = useWindowDimensions();
    
    const hTitulo = (height/100)*7;
    
    const label01 = '01';
    const label02 = '02';
    const label03 = '03';
    const label04 = '04';
    const label05 = '05';

    const [elements, setElements] = useState([]);
    const [nome, setNome] = useState([]);
    const inputRef = useRef(null);

    const addElement = () => {
      setElements((prevElements) => {
        const newElementId = prevElements.length + 1;
        const randomColor = getRandomColor();
        const nomePessoa = nome;
        const icone = getTipoIcone();
        limparNome();
        console.log('addElement nome: ' + nome)
        console.log('addElement icone: ' + icone)
        return [...prevElements, 
              { id: newElementId, 
                initialPosition: { x: 30, y: 70 }, 
                backgroundColor: randomColor, 
                nome: nomePessoa,
                icone: icone
              }];
      });
      
    };

    const getRandomColor = () => {
      const colors = ['#9e0505', '#035203', '#04045e', 
                      '#5e025e', '#666600', '#017575',
                      '#a1350a', '#611f28', '#863b29',
                      '#d8eb30', '#f83751', '#6ce01e',
                      '#f37927', '#469fe7', '#f10e9a',
                      '#000000', '#4e4e4e', '#440a66'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

    const getTipoIcone = () => {
      const manIco = ['man', 'man-outline'];
      const randomIndex = Math.floor(Math.random() * manIco.length);
      return manIco[randomIndex];
    };

    function limparNome(){
      setNome('');
      if (inputRef.current !== null){
        inputRef.current.focus();
      }
      Keyboard.dismiss();
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

        </View>

        <View style={styles.viewSubTitulo}>
          <Text style={styles.subTitulo}>
            Identificando quem não deveria, mas está interferindo nas suas emoções e no seu PDA
          </Text>

          <View style={styles.viewInput}>
            <TextInput  style={styles.input}
                        placeholder='Escreva o nome da pessoa'
                        value={nome}
                        ref={inputRef}
                        onChangeText={ (nomeInput) => {
                          setNome(nomeInput)
                          console.log('textInput nome: ' + nome)
                        } }
            />
            <TouchableOpacity style={styles.addButton} onPress={addElement}>
              <Feather name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>


        </View>
        
        <View style={{zIndex: 3, }}>

          
          {elements.map((element) => (

            <DraggableElement 
              key={element.id} 
              initialPosition={element.initialPosition} 
              color={element.backgroundColor} 
              nome={element.nome}
              icone={element.icone}
              />

          ))}
            
          
        </View>

        <View style={[styles.container, ]}>
          
          <View style={[styles.layer, 
                      { zIndex: -1, width: windowWidth - 20,
                        height: windowWidth - 20,
                        borderRadius: windowWidth,}]}>
            <Text style={styles.label}>{label05}</Text>
            <View style={[styles.layer, 
                        { zIndex: -1, width: windowWidth - 80,
                          height: windowWidth - 80,
                          borderRadius: windowWidth,}]}>
              <Text style={styles.label}>{label04}</Text>
              <View style={[styles.layer, 
                          { zIndex: -1, width: windowWidth - 140,
                            height: windowWidth - 140,
                            borderRadius: windowWidth,}]}>
                <Text style={styles.label}>{label03}</Text>
                <View style={[styles.layer, 
                            { 
                              zIndex: -1, width: windowWidth - 200,
                              height: windowWidth - 200,
                              borderRadius: windowWidth,}]}>
                  <Text style={styles.label}>{label02}</Text>
                  <View style={[styles.layer, 
                              { 
                                zIndex: -1, width: windowWidth - 260,
                                height: windowWidth - 260,
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
        </View>

        <View>
          <Text style={styles.textoRodape}>
            'Posicione as pessoas pelo nível de interferências que elas tem nas suas emoções 
            e consequentemente nas suas percepções, decisões e ações. No gráfico 1(mais ao 
            centro) interfere mais e 5 (mais para fora) interfere menos.'
          </Text>
        </View>
        
      </SafeAreaView>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F6F6',
      padding: 10,
      borderRadius: 20,
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
    barraTitulo: {
      flexDirection: 'row',
      alignItems: 'center',
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
    subTitulo: {
      fontSize: 11,
      fontStyle: 'italic',
      textAlign: 'center'
    },
    viewSubTitulo: {
      marginLeft: 30,
      marginRight: 30,
    },
    layer: {
      borderRadius: windowWidth,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#000'
    },
    label: {
      fontSize: 17,
      color: '#000',
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
    draggableElement: {
      width: 80,
      height: 30,
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'baseline'
    },
    viewInput: {
      flexDirection: 'row',
      margin: 5,
      justifyContent: 'space-between'
    },
    input: {
      backgroundColor: '#F6F6F6',
      borderWidth: 0.5,
      borderColor: '#8A8A8A',
      padding: 10,
      fontSize: 13,
      height: 30,
      width: windowWidth - 90,
      textAlign: 'left',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderTopRightRadius: 5
    },
    addButton: {
      alignSelf: 'center',
      marginLeft: 10
    },
    textoRodape: {
      fontSize: 9,
      fontStyle: 'italic',
      textAlign: 'center',
      padding: 5
    },
    viewRodape: {
      marginLeft: 10,
      marginRight: 10,
    },
  });
  