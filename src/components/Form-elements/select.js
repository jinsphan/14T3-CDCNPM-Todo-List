import React, {Component, Fragment} from 'react';

import InputBlock from './input-block';

const EMPTY_OPTION = { value: null, text: null, disabled: true};

class Select extends Component {

  constructor(props) {
    super(props);
  }

  renderLabel ({label = null, id, icon}) {
    if ( label  ) {
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

  renderOptions({options, selectedValue}) {
    return options.map(({value, text, disabled}, key) => {
      return (<option value={value} key={key} disabled={disabled ? true : null } >{text}</option>)
    });
  }

  render() {

    let {
      name,
      options = [],
      label = null,
      icon,
      defaultValue = 'new',
      id, rules = null,
      className = null,
      onChange, ...props
    } = this.props;

    return (
      <InputBlock
        animatedLabel={this.props.animatedLabel}
        className={className}
        rules={rules} {...props}
        ref={ ref => this.InputBlock = ref }
      >
        {this.renderLabel({label, id, icon})}
        <select
          className="form-control"
          name={name}
          id={id}
          defaultValue={defaultValue}
          data-rules={rules}
        >
          {this.renderOptions({options, defaultValue})}
        </select>
      </InputBlock>
    )
  }

}

export default Select;
