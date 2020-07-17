import axios from 'axios';

//const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://stark-retreat-23357.herokuapp.com'
function getusers() {
  const url = `${BASE_URL}/api/users`;
  return axios.get(url).then(response => response.data);
}

function register ( data ) {
  const url = `${BASE_URL}/api/register`;
  return axios.post( url, { data }, {
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => response.data);
}
function userLogin ( data ) {
  const url = `${BASE_URL}/api/login`;
    return axios.post( url, { data }, {
        headers: {
            'Content-type': 'application/json'
        }
    } ).then( response => response.data )
}
//  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);

export {getusers, register, userLogin};