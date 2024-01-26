import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ResultsShowScreen({ route }) {

    const [result, setResult] = useState(null)

    const id = route.params.id;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, [])
    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.phone}>{result.phone}</Text>
            <View style={styles.icon}>
                {
                    result.is_closed ? (
                        <AntDesign name="closesquare" size={30} color="black" />
                    ) :
                        (<MaterialIcons name="delivery-dining" size={30} color="black" />)
                }

            </View>

            <FlatList

                data={result.photos}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({

    name: {
        color: '#3c26cc',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
        marginTop: 20
    },
    phone: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 5
    },
    image: {
        height: 180,
        margin: 15,
        borderRadius: 20
    },
    icon: {
        alignItems: 'center'
    }


})