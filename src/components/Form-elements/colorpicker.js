import React, {Component} from 'react';

import SVG from '../svg';
import InputBlock from './input-block';

const AVAILABLE_COLORS = [
  '#d0021b',
  '#f5a623',
  '#f8e71c',
  '#8b572a',
  '#7ed321',
  '#4a90e2',
  '#50e3c2',
  '#b8e986',
  '#000',
  '#f45e43',
];

class ColorPicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colorSelectorVisible: false,
      color_value: ''
    };
  }

  componentDidMount() {
    if ( this.props.value ) {
      this.setState({
        color_value: this.props.defaultValue,
      });
    }

    this.bindBodyClick();
  }

  bindBodyClick() {
    let body = document.querySelector('body');
    body.addEventListener('click', e => {
      this.hideColorSelector();
    })
  }

  showColorSelector(e) {
    e.stopPropagation();
    this.setState({ colorSelectorVisible: true }, () => {
      setTimeout(this.focusColorSelector.bind(this), 100);
    });
  }

  hideColorSelector() {
    this.setState({ colorSelectorVisible: false });
  }

  focusColorSelector() {
    this.colorSelector.querySelector('button').focus();
  }

  onColorClick(e) {
    let element = e.target;
    let selectedColor = element.dataset.color;

    e.preventDefault();

    if ( selectedColor ) {
      this.setState({
        colorSelectorVisible: false,
        color_value: selectedColor
      });
    }
  }

  get colorItems() {
    return AVAILABLE_COLORS.map( (color, key) => (
      <button onClick={this.onColorClick.bind(this)} data-color={color} key={key} style={{backgroundColor: color}} ></button>
    ));
  }

  render() {

    let { name, label, value = '', id, rules = null, className = null, ...props } = this.props;

    return (
      <InputBlock animatedLabel={this.props.animatedLabel} className={className} ref={ ref => this.InputBlock = ref }>
        <input type="text" name={name} onFocus={this.showColorSelector.bind(this)} onClick={this.showColorSelector.bind(this)} value={this.state.color_value}  id={id} className='color-picker' readOnly {...props}/>
        <label htmlFor={id}>{label}</label>
        <i className="color-picker__preview" style={{backgroundColor: this.state.color_value ? this.state.color_value : this.props.defaultValue }}></i>
        <div className={`color-picker__selector ${this.state.colorSelectorVisible ? 'visible' : ''}`} ref={ el => this.colorSelector = el }>
          {this.colorItems}
        </div>
      </InputBlock>
    )
  }

}

export default ColorPicker;