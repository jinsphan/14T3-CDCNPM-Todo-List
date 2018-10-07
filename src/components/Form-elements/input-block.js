import React, {Component, Fragment} from 'react';
import Validator from "validatorjs";

class InputBlock extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let _this = this;
    if(this.input){
      this.input.addEventListener('change', function (e) {
        _this.toggleActiveState();
        _this.toggleErrorState();
      });

      this.input.addEventListener('keyup', function (e) {
        _this.toggleActiveState();
        _this.toggleErrorState();
      });

      this.input.addEventListener('blur', function (e) {
        _this.toggleErrorState();
      });

      // Pass all other event handler props
      this.registerEventHandlers();

      // Initial run to activate when there's a prefilled value
      this.toggleActiveState();
    }
  }

  toggleActiveState=() => {
    if ( this.props.animatedLabel ) {
      this.element.classList.toggle('active', this.input.value ? true : false);
    }
  }

  toggleErrorState=() => {

    let value = {data : this.input.value};
    let rules = {data : this.props.rules};
    let validation = new Validator(value, rules);

    let error =  validation.passes()
    this.element.classList.toggle('error', !error);
  }

  validate=() => {
    this.toggleErrorState();
  }

  attachRef=(ref) => {
    if ( ref ) {
      this.element = ref;
      this.input = ref.querySelector('input, select, textarea');
    }
  }

  registerEventHandlers=() => {
    let availableEvents = [ 'change', 'focus', 'blur', 'keyup', 'keydown' ];

    for (let event of availableEvents) {
      let capitalizedFirst = event.slice(0,1).toUpperCase() + event.slice(1);
      let propName = `on${capitalizedFirst}`;
      if ( propName in this.props ) {
        this.input.addEventListener( event, e => {
          this.props[propName](e);
        });
      }
    }
  }

  // If animatedLabel props is false, input block is 'active' by default (label is at top)
  render() {
    let { className = '', animatedLabel = false, ...props } = this.props;

    return (
      <div
        className={`input-block ${!animatedLabel ? 'active' : 'animated-label'} ${className ? className : ''}`}
        ref={this.attachRef.bind(this)}
      >
        {this.props.children}
      </div>
    )
  }

}

export default InputBlock;
