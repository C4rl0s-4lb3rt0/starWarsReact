import axios from 'axios';

export const starWarsApi = axios.create({
    baseURL: 'https://swapi.dev/api'
})