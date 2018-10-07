import React from 'react'
import PropTypes from 'prop-types'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const Carousel = ({ partners }) =>{
  const responsive = {
    1045:{
      items:5
    },
    600: {
      items:1
    },
    300: {
      items:1
    }
  }
  return <OwlCarousel
    className='owl-theme custom-owl-carosel'
    items={5}
    dots={false}
    loop
    margin={10}
    nav={false}
    lazyLoad
    autoplayTimeout={2000}
    autoplay={true}
    animateOut
    animateIn
    navText={['<i class="fa fa-angle-left"/>',' <i class="fa fa-angle-right"/>']}
    responsive = {responsive}
  >
    {
      partners.map((item, index) => {
        return (<div key={index} className='crs-item'>
          <img src={item.url} style={{ height:'120px', margin: '0 auto',width : 'auto' }} />
        </div>)
      })
    }
  </OwlCarousel>
}
Carousel.propTypes = {
  partners: PropTypes.array.isRequired,
}
export default Carousel
