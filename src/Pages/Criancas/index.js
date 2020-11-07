import React from 'react'
import { Text, ScrollView } from 'react-native'
import Scrollcards from '../../components/SidescrollCards'
import { Header, HeaderText } from './style'
import CloseSVG from '../../assets/close.svg'

export default ({ navigation }) => {

    const dataReligioso = [
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2013/04/catedral-pedro-alcantara-petropolis-frente-t.jpg',
            categoria: 'Religioso',
            titulo: 'Catedral Petrópolis'
        },
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2013/04/catedral-pedro-alcantara-petropolis-frente-t.jpg',
            categoria: 'Religioso',
            titulo: 'Catedral Petrópolis'
        },
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2013/04/catedral-pedro-alcantara-petropolis-frente-t.jpg',
            categoria: 'Religioso',
            titulo: 'Catedral Petrópolis'
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
                <HeaderText>Para Crianças</HeaderText>
            </Header>
            <Scrollcards data={dataReligioso} title={"Religioso"} navigation={navigation} />
            <Scrollcards data={dataHistorico} title={"Histórico"} navigation={navigation} />
            

        </ScrollView>

    )
}