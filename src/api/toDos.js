import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://vuecourse-a6205-default-rtdb.europe-west1.firebasedatabase.app',
    timeout: 1000
});

instance.interceptors.request.use(function(config) {
    console.log(config);
    return config;
})
instance.interceptors.response.use(function(res) {
    console.log(res);
    return res;
}, function(err) {
    console.log(err);
    return Promise.reject(err);
})

export default instance