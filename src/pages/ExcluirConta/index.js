import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

export default function ExcluirConta(){
    const navigation = useNavigation();

    return (
      <SafeAreaView>
        <StatusBar
          barStyle = "dark-content"
          hidden = {false}
          backgroundColor = "#FFF"
          translucent = {false}
          networkActivityIndicatorVisible = {true}
        />
        <View>
          <TouchableOpacity style={styles.menuDrawer} onPress={ () => navigation.openDrawer() }>
            <Feather
              name='menu'
              size={24}
              color='blue'
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text>Página Nova Excluir Conta</Text>
        </View>
      </SafeAreaView>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuDrawer: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin: 10
    },
  });
  