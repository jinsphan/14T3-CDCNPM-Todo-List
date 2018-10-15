import { connect } from 'react-redux'
import LoginView from '../components/LoginView'
import { login } from '../../../store/moduleAuthen/AuthAction'
const mapDispatchToProps =  dispatch => {
    return {
        login : (us,pw) => dispatch(login(us,pw))
    }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
