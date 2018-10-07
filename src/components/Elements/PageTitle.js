import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

export const PageTitle = ({ title, button = [{
  name: 'Create New',
  value: '/app/news/news-add'
}] }) => (
  <div className='row page-titles'>
    <div className='col-md-5 align-self-center'>
      <h4 className='text-themecolor text-uppercase'>{title}</h4>
    </div>
    <div className='col-md-7 align-self-center text-right'>
      <div className='d-flex justify-content-end align-items-center'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'><a href='javascript:void(0)'>Trang chủ</a></li>
          <li className='breadcrumb-item active'>{title}</li>
        </ol>
        {
          button.map(item => (
            <Link to={item.value} key={item.value} className='btn btn-info d-none d-lg-block m-l-15'>
              <i className='fa fa-plus-circle' style={{ paddingRight: 10 }} />
              {item.name}
            </Link>
          ))
        }
      </div>
    </div>
  </div>

)
PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.array,
}
export default PageTitle
