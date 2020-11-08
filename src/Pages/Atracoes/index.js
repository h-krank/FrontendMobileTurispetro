import React from 'react'
import { Text, ScrollView } from 'react-native'
import Scrollcards from '../../components/SidescrollCards'
import { Header, HeaderText, CardsView } from './style'
import CloseSVG from '../../assets/close.svg'
import HistoricoSVG from '../../assets/historicas.svg'
import CervejaSVG from '../../assets/cervejeiras.svg'

export default ({ navigation }) => {

    const dataCerveja = [
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2012/04/fachada-bohemia-petropolis-rj.jpg',
            categoria: 'Cervejeiro',
            titulo: 'Cervejaria Longe',
            rating: 1,

        },
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2012/04/fachada-bohemia-petropolis-rj.jpg',
            categoria: 'Cervejeiro',
            titulo: 'Cervejaria Bohemia',
            rating: 4,
        },
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2012/04/fachada-bohemia-petropolis-rj.jpg',
            categoria: 'Cervejeiro',
            titulo: 'Cervejaria Bohemia',
            rating: 2,
        }

    ]

    const dataHistorico = [
        {
            imagem: 'https://www.infoescola.com/wp-content/uploads/2011/07/Pal%C3%A1cio-Imperial-Petr%C3%B3polis_560959816-1000x667.jpg',
            categoria: 'Histórico',
            titulo: 'Museu Imperial',
            endereco: 'Rua da Imperatriz',
            telefones: '2345678',
            descricao: "Museu Imperial",
            rating: 5,
        },
        {
            imagem: 'https://www.infoescola.com/wp-content/uploads/2011/07/Pal%C3%A1cio-Imperial-Petr%C3%B3polis_560959816-1000x667.jpg',
            categoria: 'Histórico',
            titulo: 'Museu Imperial',
            rating: 2,
        },
        {
            imagem: 'https://www.infoescola.com/wp-content/uploads/2011/07/Pal%C3%A1cio-Imperial-Petr%C3%B3polis_560959816-1000x667.jpg',
            categoria: 'Histórico',
            titulo: 'Museu Imperial',
            rating: 4,
        },
    ]


    return (
        <ScrollView style={{ margin: 10 }}>

            <Header>
                <CloseSVG onPress={() => navigation.goBack()} />
                <HeaderText>Atrações</HeaderText>
            </Header>
            <CardsView>
                <Scrollcards data={dataHistorico} title={"Históricas"} navigation={navigation} icon={<HistoricoSVG />} />
            </CardsView>
            <CardsView>
                <Scrollcards data={dataCerveja} title={"Cervejarias"} navigation={navigation} icon={<CervejaSVG />} />
            </CardsView>

        </ScrollView>

    )
}