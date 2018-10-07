import React,{Component} from 'react'
import PageTitle from '../../../../../components/Elements/PageTitle'
import Post from '../../../../../components/Post/Post'
export default class NewsDetailView extends Component{
  constructor(prosp){
    super(prosp)
  }
  render(){
    const { item } = this.props.location.state
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Nội dung tin tức'
          button={[{
            name: 'Tạo mới tin tức',
            value: 'app/news/news-add'
          }, {
            name: 'Chỉnh sửa tin tức',
            value: { pathname: `/app/news/news-edit/${item.id}`, state: { item } }
          }]}
        />
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <div className='card'>
              <div className='card-body'>
                <div className='p-t-20 p-b-20'>
                  <h4 className='card-title'>{item.title}</h4>
                </div>
                <div className='m-0'>
                  <p className='text-dark p-t-20 pro-desc'>{item.desc}</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="p-t-20 p-b-20">
                  <img src={item.image} className="img-responsive" alt=""/>
                  <Post content={item.content}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
