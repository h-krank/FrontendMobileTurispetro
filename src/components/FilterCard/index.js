import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { Card, Image, Categoria, Titulo } from './style'

import HistoricoSVG from '../../assets/historicas.svg'
import CervejaSVG from '../../assets/cervejeiras.svg'
import ReligosoSVG from '../../assets/religiosas.svg'
import EcoSVG from '../../assets/eco.svg'

export default ({ data, categoryIcon }) => {

    const getData = () => {
        switch (data.categoria) {
            case "Histórico":
                return { color: '#FF296A', icon: <HistoricoSVG /> }
            case "Cervejeiro":
                return { color: '#FFDB29', icon: <CervejaSVG /> }
            case "Religiosa":
                return { color: '#29A2FF', icon: <ReligosoSVG /> }
            case "Ecológica":
                return { color: '#5DD183', icon: <EcoSVG /> }
        }
    }

    const styleData = getData()

    return (
        <Card>
            <Image source={{ uri: data.imagem }}></Image>
            <View>
                <Categoria style={{ color: styleData.color }}>{data.categoria}</Categoria>
                <Titulo>{data.titulo}</Titulo>
                {styleData.icon}
            </View>

        </Card>
    )
}