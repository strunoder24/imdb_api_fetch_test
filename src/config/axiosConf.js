import axios from 'axios';

// axios.defaults.withCredentials = true;   /*Позволяет получать куки*/

axios.defaults.headers = {
    'Accept': 'application/json',
};

if (process.env.NODE_ENV === 'production') axios.defaults.baseURL = 'https://www.omdbapi.com/';
else if (process.env.NODE_ENV === 'development') axios.defaults.baseURL = 'https://www.omdbapi.com/';


