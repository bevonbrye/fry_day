import { BASE_URL, BT } from './yapi';
import queryString from 'query-string';

// function passes an obj and create a qs to use
export function get(path, queryParams) {
    const query = queryString.stringify(queryParams)
    return fetch(`${BASE_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${BT}`,
            Origin: 'localhost',
            //explicity sends cred to api the BT 
            withCredentials: true,
        }
    })
}