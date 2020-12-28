import fetch from 'isomorphic-fetch';

const URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export function createPost(data){
    return fetch(URL + '/similarity', {
        method: 'POST',
        body: JSON.stringify( {case: data} ),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    })
    .catch(err => err);
}

export function saveResult(data){
    return fetch(URL + '/insert', {
        method: 'POST',
        body: JSON.stringify( {case: data} ),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    })
    .catch(err => err);
}
