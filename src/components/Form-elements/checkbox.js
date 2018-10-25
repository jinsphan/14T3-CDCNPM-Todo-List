import React, {Component, Fragment} from 'react';

import InputBlock from './input-block';

class CheckBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    }
  }

  componentDidMount() {
    this.setState({
      isChecked: this.props.checked,
    });
  }

  onChange(e) {

  }

  render() {

    let { name, label, icon, id, rules = null, className = null, ...props } = this.props;

    return (
      <InputBlock animatedLabel={this.props.animatedLabel} className={className} rules={rules} {...props} ref={ ref => this.InputBlock = ref }>
        <input type="checkbox" name={name} defaultChecked={this.state.isChecked ? true : null} id={id} onChange={this.onChange.bind(this)}/>
        <label htmlFor={id}>{label}</label>
      </InputBlock>
    )
  }

}

export default CheckBox;