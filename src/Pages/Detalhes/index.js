import React from 'react'
import { Text } from 'react-native'
export default ({ route: { params: { data } } }) => {

    return (
        <Text>{data.titulo}</Text>
    )
}