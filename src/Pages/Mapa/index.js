import React, { useState } from 'react'
import { View, Image, Text, Button } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import HistoricoSVG from '../../assets/mapa-historico.svg'
import CervejaSVG from '../../assets/cervejeiras.svg'
import RestauranteSVG from '../../assets/mapa-restaurante.svg'
import DormirSVG from '../../assets/mapa-dormir.svg'

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Card from '../../components/ModalCard'


export default ({ navigation }) => {
    const [current, setCurrent] = useState({})

    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: 150,
            }}
        >
            <Card data={current} navigation={navigation} />
        </View>
    );

    const sheetRef = React.useRef(null);

    const getIcon = (categoria) => {
        switch (categoria) {
            case "Cervejeiro":
                return <CervejaSVG />
            case "Histórico":
                return <HistoricoSVG />
            case "Dormir":
                return <DormirSVG />
        }
    }

    const data = [
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2012/04/fachada-bohemia-petropolis-rj.jpg',
            categoria: 'Cervejeiro',
            titulo: 'Cervejaria Bohemia',
            endereco: 'R. Alfredo Pachá, 166',
            telefones: '1234567',
            descricao: 'Lorem ipsum',
            latitude: -22.5063572,
            longitude: -43.184878
        },
        {
            imagem: 'https://www.infoescola.com/wp-content/uploads/2011/07/Pal%C3%A1cio-Imperial-Petr%C3%B3polis_560959816-1000x667.jpg',
            categoria: 'Histórico',
            titulo: 'Museu Imperial',
            endereco: 'Rua da Imperatriz',
            telefones: '2345678',
            descricao: "Lorem ipsum",
            latitude: -22.5080779,
            longitude: -43.1757655
        },
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2012/04/fachada-bohemia-petropolis-rj.jpg',
            categoria: 'Dormir',
            titulo: 'Dormitório Imperial',
            endereco: 'Rua da Imperatriz',
            telefones: '2345678',
            descricao: "Lorem ipsum",
            latitude: -22.5051119,
            longitude: -43.1835593

        },
    ]

    return (
        <>
            <MapView
                style={{
                    flex: 1,
                    width: '100%',
                    borderRadius: 10,
                    overflow: 'hidden',
                    marginTop: 16,
                }}
                initialRegion={{
                    latitude: -22.5115212,
                    longitude: -43.1821934,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014,
                }}


            >
                {data.map(local =>

                    <Marker
                        onPress={() => { sheetRef.current.snapTo(250); setCurrent(local) }}
                        key={local.titulo}
                        coordinate={{
                            latitude: local.latitude,
                            longitude: local.longitude
                        }}
                    >
                        {getIcon(local.categoria)}

                    </Marker>

                )}


            </MapView >
            <View

            >
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[0, 150, 0]}
                borderRadius={50}
                renderContent={renderContent}
            />
        </>
    )
}