/**
 * Created by minmin on 10/9/18.
 */
import React from 'react';
import { connect } from 'react-redux'
import detailRolesView from '../components/detailRolesView'
// import { actionCreator } from '../../modules/action'

const mapStateToProps = (state, ownProps) => ({
    viewingRoles : state.roles.viewingRoles
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(detailRolesView)
