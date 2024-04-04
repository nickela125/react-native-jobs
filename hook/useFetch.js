import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query, debug) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const rapidApiKey = process.env.EXPO_PUBLIC_RAPID_API_KEY;

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '1dfc304c0cmsh0d369f9946fa5acp165339jsnf54703f9d6e9',//`${rapidApiKey}`,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            console.log(`Loaded ${response.data.data.length} for ${endpoint} using query '${options.params.query}' or id '${options.params.job_id}'`)
            setData(response.data.data);
        } catch (error) {
            setError(error);
            console.error(error);
            alert("There is an error");
        } finally {
            setIsLoading(false);
            if(debug){
                console.log(JSON.stringify(data[0].job_title))
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;