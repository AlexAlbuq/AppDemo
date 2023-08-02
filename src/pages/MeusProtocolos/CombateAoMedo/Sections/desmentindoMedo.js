import React, { useState, useRef, useEffect, useMemo } from 'react';
import { View, Text, TextInput, StyleSheet, 
         TouchableOpacity, Pressable, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Foundation } from '@expo/vector-icons';

export default function DesmentindoMedo(){

  const inputRef = useRef(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [activeOption01Index, setActiveOption01Index] = useState(null);
  const [activeOption02Index, setActiveOption02Index] = useState(null);

  // Variáveis dos campos de input
  const [pergunta10, setPergunta10] = useState('');
  const [pergunta11, setPergunta11] = useState('');
  const [pergunta12, setPergunta12] = useState('');
  const [pergunta13, setPergunta13] = useState('');
  const [pergunta14, setPergunta14] = useState('');
  const [pergunta15, setPergunta15] = useState('');
  const [pergunta16, setPergunta16] = useState('');

  const [modalTexto, setModalTexto] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  
  const [sairModal, setSairModal] = useState('');
    
  const handleButtonPress = (index) => {
    setActiveButtonIndex(index);
    console.log("const handleButtonPress = (index)" + index);
  };
  const handleOption01Press = (index) => {
    setActiveOption01Index(index);
    console.log("const handleOption01Press = (index)");
  };
  const handleOption02Press = (index) => {
    setActiveOption02Index(index);
    console.log("const handleOption02Press = (index)");
  };

  const renderButtons = () => {
    const buttons = [];

    console.log("Entrou em renderButtons");
    for (let i = 0; i < 10; i++) {
      console.log("Entrou no for dentro de renderButtons");
      buttons.push(
        <View style={styles.viewSelectionItem}>
          <TouchableOpacity
            key={i}
            style={[
              { backgroundColor: activeButtonIndex === i ? '#1a98b8' : '#ffffff' },
            ]}
            onPress={() => handleButtonPress(i)}
            disabled={activeButtonIndex === i}
          >
            {console.log("index = " + i)}

            <Text style={styles.textSelection}>{i !== 9 ? "0" + (i + 1) : i + 1}</Text>
          </TouchableOpacity>
        </View>
      );
    }
    console.log("Vai fazer o return dentro de renderButtons");
    return buttons;
  };

  const renderOptions01 = () => {
    const options = [];

    console.log("Entrou em renderOptions01");
    for (let i = 0; i < 2; i++) {
      console.log("Entrou no for dentro de renderOptions01");
      options.push(
        <View style={styles.viewSelectionItem}>
          <TouchableOpacity
            key={i}
            style={[
              { backgroundColor: activeOption01Index === i ? '#1a98b8' : '#ffffff'},
            ]}
            onPress={() => handleOption01Press(i)}
            disabled={activeOption01Index === i}
          >
            <Text style={styles.textOptionsSelection}>{ i !== 0 ? "NÃO" : "SIM" }</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return options;
  };

  const renderOptions02 = () => {
    const options = [];

    console.log("Entrou em renderOptions02");
    for (let i = 0; i < 2; i++) {
      console.log("Entrou no for dentro de renderOptions02");
      options.push(
        <View style={styles.viewSelectionItem}>
          <TouchableOpacity
            key={i}
            style={[
              { backgroundColor: activeOption02Index === i ? '#1a98b8' : '#ffffff'},
            ]}
            onPress={() => handleOption02Press(i)}
            disabled={activeOption02Index === i}
          >
            <Text style={styles.textOptionsSelection}>{ i !== 0 ? "NÃO" : "SIM" }</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return options;
  };

  function modalPergunta10(){
    console.log("");
    console.log("-------------- Dentro do modalPergunta10 - modalVisible = " + modalVisible);
    if (!modalVisible) {
      setModalTexto('Pergunta 10');
      setModalVisible(true);
      console.log("");
      console.log("-------------- Dentro do If do modalPergunta10 - modalVisible = " + modalVisible);
    }
  }

  function modalPergunta13(){
    if (!modalVisible) {
      setModalTexto('Pergunta 13');
      setModalVisible(true);
    }
  }

  function sair(visible) {
    console.log("");
    console.log("-------------- Dentro do Sair - modalVisible = " + modalVisible);
    if (modalVisible) {
      
      useEffect(()=>{
        setModalVisible(visible);
      },[sairModal])
      
      
      
      console.log("");
      console.log("-------------- Dentro If do do Sair - modalVisible = " + modalVisible);
    }
  }

  return (
    <View>


      <Modal transparent={true} animationType='slide' visible={modalVisible}>
        <View style={{
          backgroundColor: "#2a2d52d8",
          width: '70%',
          height: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 55,
          marginTop: 150,
          borderRadius: 5,
        }}>


          <View style={styles.viewTextos}>
            <Text style={styles.textoMaior}>
              Aqui está o que você respondeu na Pergunta 10
            </Text>
          </View>

          <View style={styles.viewTextos}>
            <Text style={styles.textoMedio}>
              Aqui será mostrado o que foi respondido na pergunta 10, e servirá de lembrança para 
              o aliado usando o aplicativo.
            </Text>
          </View>


          <View style={styles.viewBotao}>
            <TouchableOpacity style={styles.btn}  >
              <Text style={styles.textoBotao}>SAIR</Text>
            </TouchableOpacity>
          </View>
        </View>
          
      </Modal>

      <View style={[styles.viewTopicos]}>
        <Text style={styles.txtTopicos}>
          Desmentindo o Medo
        </Text>
      </View>

      <View style={styles.viewLista}>
        <View style={[styles.viewItens]}>
          <Text style = {styles.txtPergunta}>
            10 - O que você pensa que faz você sentir esse medo?
          </Text>
          <TextInput  style={[styles.input, {borderBottomRightRadius: 15}]} multiline 
                      placeholder='Quais pensamentos passam na sua mente quando você pensa em fazer algo ou quando algo acontece e você sente esse medo?'
                      textAlignVertical='top' ref={inputRef}
                      value={pergunta10}
                      onChangeText={ (texto) => setPergunta10(texto) }
          />
        </View>

        <View style={[styles.viewItens]}>
          <Text style = {styles.txtPergunta}>
            11 - O quanto esse pensamento ou informação por trás desse medo é verdade?
          </Text>

          <View style={styles.viewSelectionAll}>
            
            {renderButtons()}

          </View>

        </View>

        <View style={[styles.viewItens]}>
          <Text style = {styles.txtPergunta}>
            12 - Existe alguém da sua convivência que pensa diferente de você e que não 
            sente o medo que você sente?
          </Text>

          <View style={styles.viewSelectionAll}>
            
            {renderOptions01()}

          </View>

        </View>

        <View style={[styles.viewItens]}>
          <Text style = {styles.txtPergunta}>
            13 - No que as pessoas que NÃO tem o medo que você tem acreditam, que é 
            diferente do que você acredita?
          </Text>
          <TextInput  style={[styles.input, {borderBottomRightRadius: 15}]} multiline 
                      placeholder='Escreva aqui...'
                      textAlignVertical='top' ref={inputRef}
                      value={pergunta13}
                      onChangeText={ (texto) => setPergunta13(texto) }
          />
        </View>

        <View style={[styles.viewItens]}>
          <Text style = {styles.txtPergunta}>
            14 - As pessoas que não tem o medo que você tem, estão tendo os resultados que você 
            gostria de ter?
          </Text>

          <View style={styles.viewSelectionAll}>
            
            {renderOptions02()}

          </View>

        </View>

        <View style={[styles.viewItens]}>
          <Text style = {styles.txtPergunta}>
            15 - Qual informação está faltando, no pensamento ou na informação que está 
            por trás desse medo, que faz ele parecer verdade?
          </Text>
          <TextInput  style={[styles.input, {borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]} multiline 
                      placeholder='Na informação e no pensamento que você tem que faz você sentir medo, pode estar faltando alguma coisa. O que pode ser? Olhe para o que você respondeu na pergunta 10 e na 13. Clique nas lupas para ver!'
                      textAlignVertical='top' ref={inputRef}
                      value={pergunta15}
                      onChangeText={ (texto) => setPergunta15(texto) }
          />

          <View style={styles.viewLupasAll}>
            <TouchableOpacity onPress={modalPergunta10}>
              <View style={styles.viewLupa}>
                <Foundation name="magnifying-glass" size={24} color='#a2e2ff' />
                <Text style={styles.textoLupa}>Pergunta 10</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={modalPergunta13}>
              <View style={styles.viewLupa}>
                <Foundation name="magnifying-glass" size={24} color='#a2e2ff' />
                <Text style={styles.textoLupa}>Pergunta 13</Text>
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
  viewSelectionAll:{
    flexDirection: 'row',
    marginTop: 10,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 0.5,
    borderColor: '#8A8A8A',
    backgroundColor: '#F6F6F6',
  },
  viewSelectionItem: {
    borderWidth: 1,
    borderColor: '#1a98b8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSelection: {
    padding: 5,
    paddingLeft: 7,
    paddingRight: 7
  },
  textOptionsSelection: {
    padding: 5,
    paddingLeft: 7,
    paddingRight: 7,
    fontSize: 22
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
    margin: 5
  },
  textoLupa: {
    paddingLeft: 5,
    color: '#2E2E2E'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textoMaior: {
    flex: 1,
    color: '#d8e4ff',
    fontSize: 23,
    fontWeight: 'bold',
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
  viewBotao: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
    height: 50,
    backgroundColor: '#ffffffa9',
    borderRadius: 5,
    alignItems: 'center'
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    margin: 10,
    borderRadius: 9,
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  },
});
