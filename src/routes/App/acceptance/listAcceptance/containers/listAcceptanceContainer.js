/**
 * Created by minmin on 10/9/18.
 */
import React from 'react';
import { connect } from 'react-redux'
import listAcceptanceView from '../components/listAcceptanceView'
// import { deleteUser,viewingUser } from '../../modules/action'

const mapStateToProps = (state, ownProps) => ({
    listUser : state.users.listUser
})

const mapDispatchToProps = (dispatch)=>{
    return{
        // deleteUser : item => dispatch(deleteUser(item)),
        // viewingUser : item => dispatch(viewingUser(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(listAcceptanceView)
