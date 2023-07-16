import axios from 'axios';
import { loginRoute, registerRoute } from '../utils/apiRoutes';

export const register = async (payload) => {
    const response = await axios.post(registerRoute, { ...payload });
    return response;
}

export const login = async (payload) => {
    const response = await axios.post(loginRoute, { ...payload });
    return response;
} 