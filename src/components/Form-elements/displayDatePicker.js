/**
 * Created by minmin on 6/2/18.
 */
import React, { Component, Fragment } from 'react';


class displayDatePicker extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <input
                className="example-custom-input"
                onFocus={this.props.onClick} value={this.props.value}
            />
        );
    }
}

export default displayDatePicker;
