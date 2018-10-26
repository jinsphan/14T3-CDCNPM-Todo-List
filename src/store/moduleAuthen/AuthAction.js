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
import {browserHistory} from 'react-router'
export const getToken = ({
    type : GET_TOKEN
})

export const loginSuccess = ({
    type : LOGIN_SUCCESS
})

export const loginFailure = ({
    type : LOGIN_FAILURE
})
export const refreshToken = () => dispatch => {
    const auth = CacheService.getAuthData()
    console.log('auth',auth)
    if(auth) {
        dispatch(loginSuccess);
        browserHistory.push('/')
    } else {
        browserHistory.push('/login')

    }

}
export const login = (us,pw) => dispatch => apiAuth.authenticate(us,pw).then(res => {
        console.log("login res", res)
    if(res.data && res.data.access_token){
        dispatch(loginSuccess);
        dispatch({
            type: "SAVE_USER",
            user: res.data.user
        })
        setAccessToken(res.data.access_token)
        CacheService.saveAuthData(res.data)
        browserHistory.push('/')
    }
    else {
        swal({
            icon : "error",
            text : 'Login failed, please check your username or password'

        });
    }

    }).catch(() => {
        swal({
            icon : "error",
            text : 'Login failed, please check your username or password'

        });
        dispatch(loginFailure);
});
export const logout = () => dispatch => {
    dispatch(logoutSuccess)
    browserHistory.push('/login')
}
export const logoutSuccess = ({
    type : LOGOUT
})