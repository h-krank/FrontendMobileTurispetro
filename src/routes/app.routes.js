import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home'
import Filtros from '../Pages/Filtros'



const Auth = createStackNavigator();


const AppRoutes = () => {
    return (
        <Auth.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: true
              }}>

            <Auth.Screen
                name="Home"
                component={Home}
            />
            <Auth.Screen
                name="Filtros"
                component={Filtros} />
        </Auth.Navigator>
    )
}

export default AppRoutes;






