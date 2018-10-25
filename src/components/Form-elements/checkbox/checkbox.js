/**
 * Created by minmin on 10/10/18.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './checkbox.scss'

export default class checkbox extends Component {
    render(){
        const {label, name, className,defaultChecked} =this.props
        return(
            <div>
                <label>
                    <input type="checkbox" className={`option-input checkbox ${className}`} name={name} defaultChecked={defaultChecked} />
                    {label}
                </label>
            </div>
        )
    }
}
checkbox.propTypes = {
    label : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    className : PropTypes.string,
    defaultChecked : PropTypes.bool
}