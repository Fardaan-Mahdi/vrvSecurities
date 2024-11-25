import axios from "axios";

const API_URL = "http://localhost:7001/api/auth";

export const login = (credentials) => axios.post(`${API_URL}/login`, credentials);
export const register = (userData) => axios.post(`${API_URL}/register`, userData);
