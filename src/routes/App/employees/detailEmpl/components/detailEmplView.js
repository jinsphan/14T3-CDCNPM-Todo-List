import React,{Component} from 'react'
import PageTitle from '../../../../../components/Elements/PageTitle'

export default class detailEmplView extends Component {
    render(){
        return(
            <div className='container-fluid'>
                <PageTitle
                title='Thông tin nhân viên'
                button={[
                    {
                        name : 'Thêm mới',
                        value : '/app/master/add-empl'
                    },
                    {
                        name : 'Thêm mới',
                        value : `/app/master/edit-empl/`
                    }
                ]}
                />
            </div>
        )
    }
}
