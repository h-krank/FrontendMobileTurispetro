import React from 'react'
import { Text, ScrollView } from 'react-native'
import Scrollcards from '../../components/SidescrollCards'
import { Header, HeaderText } from './style'
import CloseSVG from '../../assets/close.svg'

export default ({ navigation }) => {

    const dataCerveja = [
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2012/04/fachada-bohemia-petropolis-rj.jpg',
            categoria: 'Cervejeiro',
            titulo: 'Cervejaria Longe'
        },
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2012/04/fachada-bohemia-petropolis-rj.jpg',
            categoria: 'Cervejeiro',
            titulo: 'Cervejaria Bohemia'
        },
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2012/04/fachada-bohemia-petropolis-rj.jpg',
            categoria: 'Cervejeiro',
            titulo: 'Cervejaria Bohemia'
        }

    ]

    const dataHistorico = [
        {
            imagem: 'https://www.infoescola.com/wp-content/uploads/2011/07/Pal%C3%A1cio-Imperial-Petr%C3%B3polis_560959816-1000x667.jpg',
            categoria: 'Histórico',
            titulo: 'Museu Imperial'
        },
        {
            imagem: 'https://www.infoescola.com/wp-content/uploads/2011/07/Pal%C3%A1cio-Imperial-Petr%C3%B3polis_560959816-1000x667.jpg',
            categoria: 'Histórico',
            titulo: 'Museu Imperial'
        },
        {
            imagem: 'https://www.infoescola.com/wp-content/uploads/2011/07/Pal%C3%A1cio-Imperial-Petr%C3%B3polis_560959816-1000x667.jpg',
            categoria: 'Histórico',
            titulo: 'Museu Imperial'
        },
    ]

    return (
        <ScrollView style={{ margin: 10 }}>
            
            <Header>
                <CloseSVG onPress={() => navigation.goBack()} />
                <HeaderText>Atrações</HeaderText>
            </Header>
            <Scrollcards data={dataCerveja} title={"Cervejeiro"} navigation={navigation} />
            <Scrollcards data={dataHistorico} title={"Histórico"} navigation={navigation} />
            

        </ScrollView>

    )
}