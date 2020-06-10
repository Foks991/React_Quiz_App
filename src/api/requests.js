import config from './config';
import http from "./http";

export const getUsers = () => http.get(`${config}/users`);
export const getUsers1 = () => http.get(`${config}/users1`);
export const getUsers2 = () => http.get(`${config}/users2`);

export const usersApi = { getUsers, getUsers1, getUsers2 };