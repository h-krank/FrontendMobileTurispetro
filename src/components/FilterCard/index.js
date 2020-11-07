import React from 'react'
import { View, Text } from 'react-native'

import { Card, Image, Categoria, Titulo } from './style'

export default ({ data }) => {

    return (
        <Card>
            <Image source={{ uri: data.imagem }}></Image>
            <View>
                <Categoria>{data.categoria}</Categoria>
                <Titulo>{data.titulo}</Titulo>

            </View>

        </Card>
    )
}