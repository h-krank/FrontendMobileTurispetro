import React from 'react'
import { Text, ScrollView } from 'react-native'
import Scrollcards from '../../components/SidescrollCards'
import { Header, HeaderText, CardsView } from './style'
import CloseSVG from '../../assets/close.svg'
import HistoricoSVG from '../../assets/historicas.svg'
import ReligiosaSVG from '../../assets/religiosas.svg'

export default ({ navigation }) => {

    const dataReligioso = [
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2013/04/catedral-pedro-alcantara-petropolis-frente-t.jpg',
            categoria: 'Religiosa',
            titulo: 'Catedral Petrópolis'
        },
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2013/04/catedral-pedro-alcantara-petropolis-frente-t.jpg',
            categoria: 'Religiosa',
            titulo: 'Catedral Petrópolis'
        },
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2013/04/catedral-pedro-alcantara-petropolis-frente-t.jpg',
            categoria: 'Religiosa',
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
            <CardsView>
                <Scrollcards data={dataReligioso} title={"Religiosa"} navigation={navigation} icon={<ReligiosaSVG />} />
            </CardsView>
            <CardsView>
                <Scrollcards data={dataHistorico} title={"Histórico"} navigation={navigation} icon={<HistoricoSVG />} />
            </CardsView>
            

        </ScrollView>

    )
}