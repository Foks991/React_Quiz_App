import config from './config.json';
import http from "./http";

export const getUsers = () => http.get(`${config.apiBaseUrl}/users`);
export const getTests = () => http.get('http://game-shop.hostenko.net/back/data.php');

export const usersApi = { getUsers, getTests };