
import { LOGIN } from './types';

export const login = (arg) => {
    return {
        type: LOGIN,
        payload: arg
    };
};