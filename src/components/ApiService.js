import axios from 'axios';
//import {send_api_file,send_api_token} from '../constants/apiName';

const API_FILE = process.env.REACT_APP_API_FILE;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;
class ApiService {
    
    
    upload(data) {
        console.log(data);
        return axios.post(`${API_FILE}/upload`,data);
    }

    download(data) {
        // console.log(data);
        return axios.get(`${API_FILE}/download/${data}`);
        // return axios.get(`http://localhost:8345/api/v1/download/9cf6dcad-541c-4f81-811d-7e7963bb5cf6`);
    }

    token(data){
        return axios.post(`${API_TOKEN}/token`,data);
    }
}

export default new ApiService();