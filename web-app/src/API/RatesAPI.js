import axios from 'axios';

const url = 'https://api.exchangeratesapi.io/latest';

export const getRate = (base, currency) => {
    return axios.get(url, {
        params: {
            base: base,
            symbols: currency
        }
    })
}