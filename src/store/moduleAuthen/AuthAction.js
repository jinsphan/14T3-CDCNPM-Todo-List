/**
 * Created by minmin on 10/15/18.
 */
import {
    GET_TOKEN,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT
} from './AuthConstant'
import {setAccessToken} from '../../services/api/_apiFactoryWithHeader'
import {CacheService} from '../../services/CacheService'
import {apiAuth} from '../../services/api/apiAuth'
import swal from 'sweetalert'
export const getToken = ({
    type : GET_TOKEN
})

export const loginSuccess = ({
    type : LOGIN_SUCCESS
})
export const loginFailure = ({
    type : LOGIN_FAILURE
})
export const login = (us,pw) => dispatch => apiAuth.authenticate(us,pw).then(res => {
    console.log(res)
    dispatch(loginSuccess);
}).catch(() => {
    swal({
        icon : "error",
        text : 'Login failed, please check your username or password'

    });
    dispatch(loginFailure);
});
export const logout = ({
    type : LOGOUT
})