/**
 * Created by minmin on 10/9/18.
 */
import React from 'react'
import { connect } from 'react-redux'
import addRolesView from '../components/addRolesView'
import { addRoles } from '../../modules/action'

const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = (dispatch) => {
    return {
        addRoles : role => dispatch(addRoles(role)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addRolesView)
