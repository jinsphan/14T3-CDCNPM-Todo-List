/**
 * Created by minmin on 6/12/18.
 */
import React,{Component} from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
  }
  submitForm =(e)=> {
    e.preventDefault();
    // this.validateAll();
    let _formData = {};
    let fields = this.form.querySelectorAll('[name]');

    for ( let field of fields ) {
      _formData[field.name] = field.value;
    }
    if ( this.props.onSubmit ) {
      this.props.onSubmit(_formData);
    }
  }
  render() {
    const {title, children,submitText ,...props} = this.props
    return (
      <form ref={ref =>{this.form = ref}} onSubmit={this.submitForm}>
        {
          title ?
            <h2 className="text-uppercase text-center" style={{fontWeight:'400'}}>{title}</h2>
            : null
        }
        {children}
        <input type="submit" className="btn btn-success form-control" value={submitText}/>
      </form>
    )

  }
}
