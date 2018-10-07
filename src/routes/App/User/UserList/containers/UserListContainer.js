import { connect } from 'react-redux'
import UserListView from '../components/UserListView'
import { fetchUsers } from '../modules/userList'

const mapDispatchToProps = {
  fetchUsers
}

const mapStateToProps = (state) => {
  return ({
    listUser : state.users.listUser
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListView)
