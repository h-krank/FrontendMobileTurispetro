import React from 'react'
import { Text } from 'react-native'
import { Container, HeaderText } from './style'
export default ({ route: { params: { data } } }) => {

    return (
        <Container>
            <HeaderText>{data.titulo}</HeaderText>
        </Container>
        
    )
}