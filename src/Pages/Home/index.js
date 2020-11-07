import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import ScrollCards from '../../components/SidescrollCards'
import { View, Text, } from 'react-native'

import {
  Container,
  Title,
  WeatherBox,
  WeatherText,
  WeatherDetail,
  SearchBar,
  IconArea,
  Icon,
  IconText,


} from './styles';

import SunSVG from '../../assets/sun.svg'
import SearchSVG from '../../assets/search.svg'
import ComidaSVG from '../../assets/para-comer.svg'
import DormirSVG from '../../assets/para-dormir.svg'
import AtracoesSVG from '../../assets/atracoes.svg'
import CriancasSVG from '../../assets/para-criancas.svg'
import EventosSVG from '../../assets/eventos.svg'
import CircuitoSVG from '../../assets/circuitos'

const data = [
  {
    imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2012/04/fachada-bohemia-petropolis-rj.jpg',
    categoria: 'Cervejeiro',
    titulo: 'Cervejaria Longe'
  },
  {
    imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2012/04/fachada-bohemia-petropolis-rj.jpg',
    categoria: 'Cervejeiro',
    titulo: 'Cervejaria Bohemia'
  }, {
    imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2012/04/fachada-bohemia-petropolis-rj.jpg',
    categoria: 'Cervejeiro',
    titulo: 'Cervejaria Bohemia'
  },
]


const Projetos = ({ navigation }) => {
  const [weather, setWeather] = useState('')

  const loadWeather = async () => {
    const results = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=petropolis,br&appid=032e60cbafbe8333f3d6ee9c5a3309b3`)
    setWeather(results.data.main)
  }

  useEffect(() => {
    loadWeather()
  }, [])



  return (
    <Container>

      <WeatherBox>
        <SunSVG />

        <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
          <Title>Petrópolis, Rio de Janeiro</Title>
          <WeatherText>{Math.round(weather.temp - 273.15)}ºC</WeatherText>
          <WeatherDetail>Sem previsão de chuva</WeatherDetail>
        </View>

      </WeatherBox>

      <View>
        <SearchBar placeholder="Faça sua pesquisa" />
        <SearchSVG style={{ marginLeft: 'auto', marginTop: 50 }} />
      </View>

      <IconArea horizontal={true} contentContainerStyle={{alignItems: 'flex-end'}}>
        <Icon>
          <ComidaSVG />
          <IconText>Onde comer</IconText>
        </Icon>

        <Icon>
          <DormirSVG />
          <IconText>Onde dormir</IconText>
        </Icon>


        <Icon>
          <AtracoesSVG />
          <IconText>Atrações</IconText>
        </Icon>


        <Icon>
          <EventosSVG />
          <IconText>Eventos</IconText>
        </Icon>


        <Icon>
          <CircuitoSVG />
          <IconText>Circuitos</IconText>
        </Icon>


        <Icon>
          <CriancasSVG />
          <IconText>Para crianças</IconText>
        </Icon>


      </IconArea>


      <ScrollCards data={data} title="Sugestões" navigation={navigation} />
    </Container>
  )
}

export default Projetos;