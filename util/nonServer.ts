import ls from "localstorage-slim";
import moment from "moment/moment";
import axios from "axios";
const currentHour = moment().hour();

export const BASE_URL = process.env.NEXT_PUBLIC_APP_MODE === 'production' ? 'http://localhost:3000' : 'https://emrsolution.vercel.app';

export const encryptLS = (key: string, value: string) => {
    ls.set(key, value, {encrypt: true});
    return true;
}

export const decryptLS = (key: string) => {
    const data: string | null =  ls.get(key, {decrypt: true});
    if (data) {
        return data;
    }
    return false;
}

export const getGreetingBasedOnHour = () => {
    if (currentHour < 12) {
        return "Good Morning";
    } else if (currentHour < 17) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

export const getCookieInClient = (name: string) => {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null; // Return null if the cookie isn't found
}

export const fetchTotalNumOfClaims = async() => {
    const claims = await axios.get(`${BASE_URL}/api/claim`, {headers: {'Authorization': `Bearer ${getCookieInClient('entityToken')}`}});
    return claims.data.length;
}