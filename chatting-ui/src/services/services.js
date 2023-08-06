import axios from 'axios';
import { contactsRoute, getMessageRoute, loginRoute, registerRoute, sendMessageRout, setAvatarRoute } from '../utils/apiRoutes';

export const register = async (payload) => {
    const response = await axios.post(registerRoute, { ...payload });
    return response;
}

export const login = async (payload) => {
    const response = await axios.post(loginRoute, { ...payload });
    return response;
}
export const setAvatar = async (id, image) => {
    const response = await axios.put(`${setAvatarRoute}/${id}`, { image });
    return response;
}
export const getContacts = async (id) => {
    const response = await axios.get(`${contactsRoute}/${id}`);
    return response;
}
export const logOut = async (id) => {
    const response = await axios.get(`${contactsRoute}/${id}`);
    return response;
}
export const getMessages = async (payload) => {
    const response = await axios.post(`${getMessageRoute}`, { ...payload });
    return response;
}
export const sendMessage = async (payload) => {
    const response = await axios.post(`${sendMessageRout}`, { ...payload });
    return response;
} 