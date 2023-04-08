import react from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import ResultsDetails from "./ResultsDetails";
import { withNavigation } from "react-navigation";

const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('ResultsShow',{id: item.id})}
                        >
                            <ResultsDetails result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 15,
    },
    container: {
        marginBottom: 15,
    }
})

export default withNavigation(ResultsList);