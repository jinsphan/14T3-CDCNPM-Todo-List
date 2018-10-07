import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
// import './AppLayout.scss'

export const ProductItem = () => (
  <div className='mg-bottom-30 ere-item-wrap ere-property-featured'>
    <div className='property-inner'>
      <div className='property-image'>
        <img width='330' height='180' src='http://themes.g5plus.net/beyot/wp-content/uploads/2017/02/property-17-330x180.jpg' alt='Single House Near Orland Park, Chicago' title='Single House Near Orland Park, Chicago' />
        <div className='property-action block-center'>
          <div className='block-center-inner'>
            <div id='property-gallery-771' className='property-view-gallery-wrap' data-toggle='tooltip' title='' data-original-title='(5) Photos'> <a data-property-id='771' href='javascript:void(0)' className='property-view-gallery'>
              <i className='fa fa-camera' />
            </a>
            </div>
            <a href='javascript:void(0)' className='property-favorite' data-property-id='771' data-toggle='tooltip' title='' data-title-not-favorite='Add to Favorite' data-title-favorited='It is my favorite' data-original-title='Add to Favorite'>
              <i className='fa fa-star-o' />
            </a>
            <a className='compare-property' href='javascript:void(0)' data-property-id='771' data-toggle='tooltip' title='' data-original-title='Compare'>
              <i className='fa fa-plus' />
            </a>
          </div>
        </div>
        <a className='property-link' href='http://themes.g5plus.net/beyot/property/single-house-near-orland-park-chicago/' title='Single House Near Orland Park, Chicago' />
        <div className='property-label property-featured'>
          <p className='label-item'>
            <span className='property-label-bg'>Featured <span className='property-arrow' /></span>
          </p>
        </div>
        <div className='property-status'>
          <p className='status-item'>
              <span className='property-status-bg' style='background-color: #32b5f8'>For Rent <span className='property-arrow' style='border-left-color: #32b5f8; border-right-color: #32b5f8' />
              </span>
          </p>
        </div>
      </div>
    </div>
  </div>

)

export default ProductItem
