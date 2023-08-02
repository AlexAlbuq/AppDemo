import React from 'react';
import { createDrawerNavigator, TouchableOpacity } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MeusProtocolos from '../pages/MeusProtocolos';
import Relatorios from '../pages/Relatorios';
import ExcluirConta from '../pages/ExcluirConta';
import Sair from '../pages/Sair';

const Drawer = createDrawerNavigator();

export default function Routes(){
  return(
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,

        drawerActiveBackgroundColor: '#475F7F',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#F6F6F6',
        drawerInactiveTintColor: '#2E2E2E'

      }}
    >
      <Drawer.Screen
        name='Meus Protocolos'
        component={MeusProtocolos}
      />

      <Drawer.Screen
        name="Relatórios"
        component={Relatorios}
      />

      <Drawer.Screen
        name='Excluir Conta'
        component={ExcluirConta}
      />

      <Drawer.Screen
        name='Sair'
        component={Sair}
      />

    </Drawer.Navigator>
  )
}