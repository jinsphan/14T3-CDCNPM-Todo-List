/**
 * Created by minmin on 10/9/18.
 */
import React, { Component } from 'react'
import PageTitle from '../../../../../components/Elements/PageTitle'
import Checkbox from '../../../../../components/Form-elements/checkbox/checkbox'
import DatePicker from '../../../../../components/Form-elements/DatePicker/DatePicker'
import{ browserHistory } from 'react-router'
import ReactTable from 'react-table'
export default class addUsersView extends Component {

    guidGenerator = () => {
        let S4 = () => {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }
    submitForm  = (e) => {
        e.preventDefault()
        let formData = {}
        let fields = this.form.querySelectorAll('[name]');
        for(let field of fields) {
            if(field.type !== 'checkbox') {
                formData[field.name] = field.value
            } else {
                formData[field.name] = field.checked
            }
        }
        formData.id = this.guidGenerator()
        console.log(formData)
        this.props.addUser(formData)

        browserHistory.push('/app/role/users')
    }

    render(){
        const listAcceptance = [
            {
                id : '123456',
                PurchaseOrderNo:'aasdfasdf',
                dateCreate:'asdfasdf',
                HSD:'asdfasdf'
            }
        ]
        return(
            <div className='container-fluid'>
                <PageTitle
                    title='Tạo mới đơn nghiệm thu '
                    button={[

                    ]}
                />
                <form action="" ref={refs=> this.form = refs} onSubmit={this.submitForm}>
                    <div className='card'>
                        <div className="card-body">
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className='col-sm-6'>
                                            <div className="form-group form-material">
                                                <label htmlFor="">Ngày giao hàng:</label>
                                                <DatePicker/>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-group form-material">
                                                <label htmlFor="">Ngày tạo: </label>
                                                <DatePicker/>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className="form-group text-center">
                                                <button onClick={()=>{browserHistory.push('/app/role/users')}} className="btn btn-rounded btn-warning form-control m-b-20" >Hủy</button>
                                                <input type="submit" className="btn btn-success form-control btn-rounded" value='Tạo mới'/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-material m-b-0">
                                        <label htmlFor="">Ngày giao hàng:</label>
                                        <textarea name="note" id="" cols="30" rows="5" className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                            <h4 className="m-t-30 text-info text-uppercase">Danh sach san pham</h4>
                            <ReactTable
                                columns={[
                                    {
                                        Header : 'Mã san pham',
                                        accessor: 'id',
                                    },
                                    {
                                        Header : 'Ten san pham',
                                        accessor: 'PurchaseOrderNo',
                                    },
                                    {
                                        Header : '',

                                        columns: [
                                            {
                                                Header: 'Chat luong',
                                                id : 'quantity',
                                                accessor : item => (
                                                    <div className="form-group form-material m-b-0">
                                                        <select name="quantity" id="" className="form-control">
                                                            <option value="tot">Tot</option>
                                                            <option value="trungbinh">Trung binh</option>
                                                            <option value="kem">Kem</option>
                                                        </select>
                                                    </div>
                                                )
                                            }
                                        ],
                                    },
                                    {
                                        Header : '',

                                        columns: [
                                            {
                                                Header: 'Ngay san xuat',
                                                id : 'dateCreate',
                                                accessor : item => (
                                                    <div className="form-group form-material m-b-0">
                                                        <DatePicker/>
                                                    </div>
                                                )
                                            }
                                        ],
                                    },
                                    {
                                        Header : '',

                                        columns: [
                                            {
                                                Header: 'Han su dung',
                                                id : 'HSD',
                                                accessor : item => (
                                                    <div className="form-group form-material m-b-0">
                                                        <DatePicker/>
                                                    </div>
                                                )
                                            }
                                        ],
                                    },

                                ]}
                                data={listAcceptance}
                                filterable
                                defaultPageSize={5}
                                className="-striped -highlight"
                                noDataText="Oh Noes!"
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
