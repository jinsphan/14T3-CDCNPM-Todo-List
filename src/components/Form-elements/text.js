import React, {Component, Fragment} from 'react';

import InputBlock from './input-block';

class Text extends Component {

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

    let {placeholder, animatedLabel = null, name, label = null, icon, id, rules = null,errors , className = null, children = null,reset, ...props} = this.props;
    return (
      <InputBlock animatedLabel={animatedLabel} className={className} rules={rules} {...props} ref={ ref => this.InputBlock = ref } errors={errors}>
        {this.renderLabel({label, id, icon})}

        <input
          type="text"
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

export default Text;
