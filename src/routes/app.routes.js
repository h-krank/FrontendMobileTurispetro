import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home'
import Filtros from '../Pages/Filtros'
import Detalhes from '../Pages/Detalhes'
import Atracoes from '../Pages/Atracoes'
import Circuitos from '../Pages/Circuitos'
import Criancas from '../Pages/Criancas'


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
{/* 
            <Auth.Screen
                name="Comer"
                component={Comer} />    

            <Auth.Screen
                name="Dormir"
                component={Dormir} /> */}

            <Auth.Screen
                name="Atracoes"
                component={Atracoes} />

            {/* <Auth.Screen
                name="Eventos"
                component={Eventos} />

            <Auth.Screen
                name="Circuitos"
                component={Circuitos} /> */}

            <Auth.Screen
                name="Criancas"
                component={Criancas} />

        </Auth.Navigator>
    )
}

export default AppRoutes;






