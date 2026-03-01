import { request } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config()

export async function getToken() {
    const apiContext = await request.newContext();
    const response = await apiContext.post('https://api.escuelajs.co/api/v1/auth/login', {
        data: {
            email: process.env.USER_EMAIL,
            password: process.env.USER_PASSWORD,
        },
    });
    const data = await response.json();
    console.log(data);
    return data.access_token;
}

export async function getProfile() {
    const apiContext = await request.newContext();
    const token = await getToken();
    const response = await apiContext.get('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
}