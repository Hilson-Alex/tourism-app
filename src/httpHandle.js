import fetch from 'isomorphic-fetch';


export function createPost(data){
    return fetch('https://tourism-reco-api.herokuapp.com/similarity', {
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
    return fetch('https://tourism-reco-api.herokuapp.com/insert', {
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