import React from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image,
        StatusBar, useWindowDimensions, ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons';
import EntendendoMedo from './Sections/entendendoMedo';
import AvaliandoMedo from './Sections/avaliandoMedo';
import DesmentindoMedo from './Sections/desmentindoMedo';

export default function NovoProtocoloMedo(){

    const navigation = useNavigation();
    const {height, width} = useWindowDimensions();
    const hTitulo = (height/100)*7;
    const hSubTitulo = (height/100)*8;

    return (
      <SafeAreaView style={[styles.container, {backgroundColor: '#D9E2ED'}]}>
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
            source={require('../../../assets/GPSLogoComprimida.png')}
            style={{ width: 100, height: 80, marginTop: 20}}
          />

          <TouchableOpacity style={styles.menuDrawer} onPress={ () => [] }>
            <Ionicons name="help-circle-outline" size={24} color="#ffffff" />
          </TouchableOpacity>

        </View>

        <ScrollView style={styles.viewSessoes}>
          
          <EntendendoMedo/>

          <AvaliandoMedo/>

          <DesmentindoMedo/>
          
          <View style={{height: 110}}>

          </View>

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
    paddingBottom: 70
  },
  menuDrawer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10
  },
  viewSessoes:{
    marginTop: -50,
  },
  viewSessao_02: {
    alignItems: 'center',
    padding: 5,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    backgroundColor: '#ffffff',
    elevation: 1,
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
  txtSubTitulos: {
    textAlign: 'center',
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  txtAutor: {
    textAlign: 'center',
    fontSize: 11,
    fontStyle: 'italic'
  },
});
