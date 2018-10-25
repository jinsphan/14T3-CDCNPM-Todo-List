/**
 * Created by minmin on 10/24/18.
 */
import React,{Component} from 'react'
import propTypes from 'prop-types'
export default class Note extends Component {
    state = {
        isEdit : this.props.data.isNew ,
    }
    delete = (id) => {
        if (this.props.delete) {
            this.props.delete(id)
        }
    }
    toggleEdit = () => {
        this.setState({
            isEdit: true
        })
    }
    onKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.submit(event);
        }
        if (event.key === 'Escape') {
            this.setState({
                isEdit: false
            })
        }
    }
    submit = (e) => {
        const { data } = this.props
        console.log('submit')
        e.preventDefault()
        const fields = this.form.querySelectorAll('[name]');
        let formData= {}
        for( let field of fields){
            formData[field.name] = field.value
        }
        formData.id= data.id
        this.setState({
            isEdit: false
        })
        if(this.props.edit) {
            this.props.edit(formData)
        }
    }
    render(){
        const { data } = this.props
        const { isEdit } = this.state
        return(
            <div>
                {
                    isEdit ?
                        <form action="" ref={refs => this.form = refs} className="form-material" onSubmit={e=> {this.submit(e)}}>
                            <div className="card text-white bg-info">
                                <div className="card-header">
                                    <input className="form-control text-light text-uppercase" type="text" name="title" defaultValue={data.title} onKeyDown={e=>{this.onKeyDown(e)}}/>
                                </div>
                                <div className="card-body">
                                    <textarea
                                        className="form-control card-text text-light "
                                        defaultValue={data.description}
                                        rows={3}
                                        name="description"
                                        onKeyDown={e=>{this.onKeyDown(e)}}
                                    />
                                </div>
                            </div>
                        </form> :
                        <div className="card text-white bg-info">
                            <div className="card-header">
                                <a className="text-uppercase font-weight-bold text-left m-b-0 text-white">{data.title}</a>
                                <a href="javascript:void(0)" onClick={() => this.delete(data.id)} className="text-light float-right">
                                    <i className="ti-trash"/>
                                </a>
                                <a href="javascript:void(0)" onClick={() => this.toggleEdit()} className="text-light p-r-10 float-right">
                                    <i className=" ti-pencil"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{data.description}</p>
                            </div>
                        </div>
                }

            </div>

        )
    }
}

Note.propTypes = {
    edit : propTypes.func,
    delete : propTypes.func
}