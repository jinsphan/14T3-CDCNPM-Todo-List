import React, {Component, Fragment} from 'react';

import SVG from '../svg';
import InputBlock from './input-block';

class Email extends Component {

  constructor(props) {
    super(props);
  }

  renderLabel ({label, id, icon}) {
    if ( label !== false ) {
      return (
        <Fragment>
          {icon ? (<SVG name="user" />) : ''}
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
    let { name = 'email', label = 'Email', icon, id = 'email', animatedLabel, rules = 'email|required', className = null, ...props } = this.props;

    return (
      <InputBlock animatedLabel={animatedLabel} rules={rules} className={className} {...props} ref={ ref => this.InputBlock = ref }>
        <input type="email" name={name} id={id} data-rules={rules} {...props} />
        {this.renderLabel({label, id, icon})}
      </InputBlock>
    )
  }

}

export default Email;