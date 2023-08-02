import React from 'react';
import { View, Text, Image } from 'react-native';  

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props){
  return(
    <DrawerContentScrollView {...props}>
      <View style={{
        width: '100%',
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
      }}
      >
        <Image
          source={require('../assets/ImagemPerfilAlexandre.png')}
          style={{ width: 65, height: 65 }}
        />

        <Text style={{ color:'#000', fontSize: 17, marginTop: 5, marginBottom: 2 }}>
          Alexandre Albuquerque
        </Text>

        <Text style={{ color:'#303030', fontSize: 14, marginBottom: 35 }}>
          alexandre.albuquerque@email.com.br
        </Text>

      </View>

      <DrawerItemList {...props}/>

    </DrawerContentScrollView>
  )
}