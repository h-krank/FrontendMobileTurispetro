import React from 'react'
import { View, Text } from 'react-native'

import { Card, Image } from './style'

export default ({ data }) => {

    return (
        <Card>
            <Image source={{ uri: data.imagem }}></Image>
            <View>
                <Text>{data.categoria}</Text>
                <Text>{data.titulo}</Text>

            </View>

        </Card>
    )
}