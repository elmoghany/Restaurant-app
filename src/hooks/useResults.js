import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    useEffect( () => {
        searchApi('pasta')
    }, []
    )
    const searchApi = async (searchTerm) => {
        console.log('useEffect!')
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm,
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

    // call searchapi when component is first rendered
    // searchApi('pasta')
    // infinite loop
    return [searchApi, results, errorMessage]
}