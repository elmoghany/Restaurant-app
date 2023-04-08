import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')
    console.log('id: ', id)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }
    useEffect(() =>{
        getResult(id)
    }, [])

    if(!result){
        return null
    }
    return (
        <View>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image source={{uri: item}} style={styles.image}></Image>
                    }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    name:{
        fontWeight: 'bold',
        marginBottom: 5,
    },
    image:{
        height: 200,
        width: 300,
    }
});
export default ResultsShowScreen;