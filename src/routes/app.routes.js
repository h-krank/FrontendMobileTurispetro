import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home'
import Filtros from '../Pages/Filtros'
import Detalhes from '../Pages/Detalhes';
import Atracoes from '../Pages/Atracoes'


const Auth = createStackNavigator();


const AppRoutes = () => {
    return (
        <Auth.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}>

            <Auth.Screen
                name="Home"
                component={Home}
            />
            <Auth.Screen
                name="Filtros"
                component={Filtros} />
            <Auth.Screen
                name="Detalhes"
                component={Detalhes} />

            <Auth.Screen
                name="Atracoes"
                component={Atracoes} />


        </Auth.Navigator>
    )
}

export default AppRoutes;






