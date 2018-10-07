import { connect } from 'react-redux'
import LoginView from '../components/LoginView'
import { login } from '../modules/login'
const mapDispatchToProps = {
  login
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
