import Axios from 'axios'
import {localStorageService} from './loclStorageServices';
const data = require('../appconfig.json');
const baseUrl = data.api;
const { getAccessToken } = new localStorageService();
export const authenticate = async () =>{
    const token = getAccessToken();
    let valid = false;
    if(token === undefined || token === null){
        return false;
    }
    await Axios.get(`${baseUrl}authenticate`, { headers: { Authorization: `Bearer ${token}`}}).then(respond => {
        if(respond.status === 200){
            valid = true;
        }
    });
    return valid;
};