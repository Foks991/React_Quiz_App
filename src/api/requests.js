import config from './config.json';
import http from "./http";

export const getUsers = () => http.get(`${config.apiBaseUrl}/users`);
export const getUsers1 = () => http.get(`${config.apiBaseUrl}/users1`);
export const getUsers2 = () => http.get(`${config.apiBaseUrl}/users2`);

export const usersApi = { getUsers, getUsers1, getUsers2 };