import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async () => {
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        }
        catch(err){
            console.log(err)
            setErrorMessage('Something went wrong')
        }        //response.data
    }

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)} 
                onTermSubmit={searchApi}
                // onTermChange={(newTerm) => setTerm(newTerm)} 
                // onTermSubmit={() => console.log('term was submitted')}
                // onTermSubmit={() => searchApi()}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>we have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;