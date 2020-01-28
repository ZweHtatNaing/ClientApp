import Axios from 'axios'
import localStorageService from './loclStorageServices';
const data = require('../appconfig.json');
const baseUrl = data.api;

const { setToken, setValue } = new localStorageService();
export class userServices {
    createUser = (data: object) =>{
       return Axios.post(`${baseUrl}user`, data).then(respond => {
           if(respond.status === 200 && respond.data.code === true){
                if(respond.data.data){
                    return {code: true, data: respond.data.data}
                }
           }
        });
    };
    login = (data: object) =>{
        return Axios.post(`${baseUrl}authenticateuser`, data).then(respond => {
            if(respond.status === 200 && respond.data.code === true){
                if(respond.data.data){
                    setToken(respond.data.data.token);
                    setValue(respond.data.data.username,'username' );
                    return {code: true, data: respond.data.data}
                }
            }
        });
    }
};
export default userServices;