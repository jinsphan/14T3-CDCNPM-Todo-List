import React, {Component, Fragment} from 'react';

import InputBlock from './input-block';

class DatePicker extends Component {

  constructor(props) {
    super(props);
  }

  renderLabel = ({label = null, id, icon}) =>{
    if ( label ) {
      return (
        <Fragment>
          <label htmlFor={id}>
            {label}
          </label>
        </Fragment>
      )
    } else {
      return null;
    }
  }

  render() {

    let {placeholder, animatedLabel = null, name, label = null, icon, id, rules = null, className = null, children = null,reset, ...props } = this.props;

    return (
      <InputBlock animatedLabel={animatedLabel} className={className} data-rules={rules} {...props} ref={ ref => this.InputBlock = ref }>
        {this.renderLabel({label, id, icon})}

        <input
          type="date"
          name={name}
          id={id}
          {...props}
          data-rules={rules}
          ref={ n => this.node = n}
          className="form-control"
          placeholder={placeholder? placeholder: null}/>

        {children}
      </InputBlock>
    )
  }

}

export default DatePicker;
