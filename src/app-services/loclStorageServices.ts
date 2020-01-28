export class localStorageService {
    setToken = (token: string) => {
        localStorage.setItem('token', token);
    };
    getAccessToken = () => {
        return localStorage.getItem('token');
    };
    clearToken = () => {
        localStorage.removeItem('token');
    };
    setValue = (value: string, key: string) => {
        localStorage.setItem(key, value);
    };
    getValuen = (key: string) =>{
        return localStorage.getItem(key);
    }
};
export default localStorageService;