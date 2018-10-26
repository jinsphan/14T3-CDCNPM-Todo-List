/**
 * Created by minmin on 10/15/18.
 */
import {
    GET_TOKEN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT,
} from './AuthConstant';
import { CacheService } from '../../services/CacheService';

const initialState = {
    auth: false,
    token: '',
    user: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return state;
        case LOGIN_SUCCESS:
            return { auth: true ,token : action.payload};
        case "SAVE_USER": 
            return { ...state, user: action.user}
        case LOGIN_FAILURE:
            return { auth: false };
        case LOGOUT:
            CacheService.clearAuthData();
            return { auth: false ,token : ''};
        default:
            return state;
    }
};


