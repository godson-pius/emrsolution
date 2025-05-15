import ls from "localstorage-slim";
import moment from "moment/moment";
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