'use server'

import {cookies} from "next/headers";
import axios from "axios";
import {BASE_URL} from "@/util/nonServer";

export const setCookie = async (name: string, value: string) => {
    const cookieStore = await cookies();
    cookieStore.set(name, value, {secure: true})
    return true;
}

export const getCookie = async (name: string) => {
    const cookieStore = await cookies();
    return cookieStore.get(name)?.value
}

export const deleteCookie = async (name: string) => {
    const cookieStore = await cookies();
    return cookieStore.delete(name)
}