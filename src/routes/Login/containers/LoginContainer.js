import { connect } from 'react-redux'
import LoginView from '../components/LoginView'
import { login,refreshToken } from '../../../store/moduleAuthen/AuthAction'
const mapDispatchToProps =  dispatch => {
    return {
        login : (us,pw) => dispatch(login(us,pw)),
        refreshToken: () => dispatch(refreshToken())
    }
}

const mapStateToProps = (state) => ({
    isLogin : state.authen.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
