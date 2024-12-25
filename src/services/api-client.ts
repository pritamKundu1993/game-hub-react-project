import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '46aefcea45474ade81861313cbd52a97',
    },
});
