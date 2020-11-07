import React from 'react'
import { Text, ImageBackground, View, TouchableOpacity } from 'react-native'
import { SugestionText, Name, Category, Card } from './style'

export default ({ data, navigation }) => {

    const getColor = (category) => {
        switch (category) {
            case "Histórico":
                return '#FF296A'
            case "Cervejeiro":
                return '#FFDB29'
            case "Religiosa":
                return '#29A2FF'
            case "Ecológica":
                return '#5DD183'
        }
    }

    return (
        <Card>
            <TouchableOpacity
                onPress={() => navigation.navigate("Detalhes", { data })}

                style={{ marginRight: 20 }}
            >
                <ImageBackground
                    style={{
                        resizeMode: "contain",
                        height: 220,
                        width: 180
                    }} source={{ uri: data.imagem }}>

                    <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Category style={{ color: getColor(data.categoria) }}>{data.categoria}</Category>
                        <Name>{data.titulo}</Name>
                    </View>

                </ImageBackground>

            </TouchableOpacity>
        </Card>
    )
}