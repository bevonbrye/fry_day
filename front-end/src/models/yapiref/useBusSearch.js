import { useState, useEffect} from 'react';
import * as yapi2 from './yapi2';


//save the request results in state 
export function useBusSearch (term, location ) { 
    const [businesses, setBusinesses] = useState([]); 
    const [numOfResults, setNumOfResults] = useState(); 
    const [searchParams, setSearchParams] = useState({term, location})

    //api call with useEffect for async calls to network
    useEffect(() => { // function cannot be async: wrap the fetch in another function and execute after ~
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await yapi2.get('/businesses/search', searchParams);
                const res = await rawData.json();
                setBusinesses(res.businesses); //after data is fetched it is saved locally in state 
                setNumOfResults(res.total);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]); //creates dependency list that rexecutes search 
    return [businesses, numOfResults, searchParams, setSearchParams];
}