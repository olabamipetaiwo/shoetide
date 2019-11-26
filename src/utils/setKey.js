import axios from 'axios';
const setApiKey = (key) => {
    if(key) {
        axios.defaults.headers.common['Authorization'] = "Bearer"+key;
        axios.defaults.headers.common['content-type'] = "application/json";
        axios.defaults.headers.common['cache-control'] = "no-cache";
        console.log("Key Set");
    }else {
        delete axios.defaults.headers.common["authorization"];
        delete axios.defaults.headers.common["content-type"];
        delete axios.defaults.headers.common["cache-control"];
    }
} 


export default setApiKey;