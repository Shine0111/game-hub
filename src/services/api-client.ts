import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5a7b1ab50a094b12a8ca4df55c5e7229'
    }
})