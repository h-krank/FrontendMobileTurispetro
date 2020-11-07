import React from 'react'
import { Text, ImageBackground, View, TouchableOpacity } from 'react-native'
import { SugestionText, Name, Category, Card } from './style'

export default ({ data, navigation }) => {

    return (
        <Card>
        <TouchableOpacity
            onPress={() => navigation.navigate("Detalhes", {data})}
            
            style={{ marginRight: 20 }}
        >
            <ImageBackground
            style={{
                resizeMode: "contain",
                height: 220,
                width: 180
              }} source={{ uri: data.imagem }}>
                <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Category>{data.categoria}</Category>
                    <Name>{data.titulo}</Name>
                </View>

            </ImageBackground>

        </TouchableOpacity>
        </Card>
    )
}