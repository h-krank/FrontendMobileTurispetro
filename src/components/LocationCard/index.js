import React from 'react'
import { Text, ImageBackground, View, TouchableOpacity } from 'react-native'
import { SugestionText, Name, Category } from './style'

export default ({ data, navigation }) => {

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Detalhes", {data})}
            
            style={{ marginRight: 20 }}
        >
            <ImageBackground 
            style={{ width: 180, height: 220 }} source={{ uri: data.imagem }}>
                <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Category>{data.categoria}</Category>
                    <Name>{data.titulo}</Name>
                </View>

            </ImageBackground>

        </TouchableOpacity>
    )
}