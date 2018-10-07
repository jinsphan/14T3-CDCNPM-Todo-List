import React, {Component} from 'react';
import InputBlock from './input-block';

class Number extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { name, label, animatedLabel = null, id, rules = 'numeric', className = null, ...props } = this.props;

    return (
      <InputBlock animatedLabel={animatedLabel} rules={rules} className={className} {...props} ref={ ref => this.InputBlock = ref }>
        <input type="number" name={name} id={id} {...props} data-rules={rules} className="form-control"/>
        {
          label ? <label htmlFor={id}>{label}</label> : null

        }
      </InputBlock>
    )
  }

}

export default Number;
