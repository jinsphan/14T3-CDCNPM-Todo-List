import React, {Component, Fragment} from 'react';

import SVG from '../svg';
import InputBlock from './input-block';

class Password extends Component {

  constructor(props) {
    super(props);
  }

  renderLabel ({label, id}) {
    if ( label !== false ) {
      return (
        <Fragment>
          <SVG name="lock" />
          <label htmlFor={id}>
            {label}
          </label>
        </Fragment>
      )
    } else {
      return '';
    }
  }

  render() {
    let { animatedLabel, value, name = 'password', label = 'Password', id = 'password', rules = 'required|min:6', ...props } = this.props;

    return (
      <InputBlock animatedLabel={animatedLabel} rules={rules}>
        <input type="password" defaultValue={value} name={name} id={id} data-rules={rules} {...props}/>
        {this.renderLabel({label, id})}
      </InputBlock>
    )
  }

}

export default Password;