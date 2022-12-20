import axios from 'axios';
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

export default axios.create({
    baseURL: 'http://localhost:3001'
})

export { axiosConfig }