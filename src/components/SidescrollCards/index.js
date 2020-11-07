import React from 'react'
import { ScrollView } from 'react-native'
import { Title, NavigateCategory } from './style'
import Card from '../LocationCard'

export default ({ data, title, navigation }) => {

    return (
        <>
            <NavigateCategory
                onPress={() => navigation.navigate('Filtros', {title, data}) }>
                {title + ' >'}
            </NavigateCategory>
            <ScrollView horizontal={true}>
                {data.map(item => <Card key={Math.random()} data={item} navigation={navigation} />)}
            </ScrollView>
        </>
    )
}
