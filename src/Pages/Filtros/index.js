import React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FilterCard from '../../components/FilterCard'

export default ({ route: { params: { title, data } } }) => {
    // console.log(props)

    return (
        <ScrollView>

            <Text>{title}</Text>
            {data.map(item =>
                <FilterCard data={item}></FilterCard>

            )}
        </ScrollView>

    )
}