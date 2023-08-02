import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CombateAoMedo from "./CombateAoMedo"
import RotaProtocolos from "./rotaProtocolos";
import NovoProtocoloMedo from "./CombateAoMedo/novoProtocoloMedo";
import MapaNucleoInterno from "./MapaNucleoInterno";
import NovoMapaNucleoInterno from "./MapaNucleoInterno/novoMapaNucleoInterno";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='RotaProtocolos'
                component={RotaProtocolos}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='CombateAoMedo'
                component={CombateAoMedo}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='NovoProtocoloMedo'
                component={NovoProtocoloMedo}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='MapaNucleoInterno'
                component={MapaNucleoInterno}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='NovoMapaNucleoInterno'
                component={NovoMapaNucleoInterno}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    )
}
