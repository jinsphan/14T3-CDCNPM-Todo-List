import React, { Component } from 'react'
import './HeaderGuest.scss'
import { browserHistory } from 'react-router'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowMobileMenu : false,
    }
  }
  toggleMobileMenu = () => {
    const { isShowMobileMenu } = this.state
    if (isShowMobileMenu) {
      this.menuMobile.classList.add('animated', 'bounceOutLeft')
    } else {
      this.menuMobile.classList.add('animated', 'bounceInLeft', 'show')
    }
    setTimeout(() => {
      if (isShowMobileMenu) {
        this.menuMobile.classList.remove('animated', 'bounceOutLeft', 'show')
      } else {
        this.menuMobile.classList.remove('animated', 'bounceInLeft')
      }
    }, 1000)
    this.setState({ isShowMobileMenu : !isShowMobileMenu })
  }
  onRoute =(routeName) => {
    browserHistory.push(routeName)
    if(window.innerWidth <= 768){
      this.toggleMobileMenu()
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = () =>  {
    if(window.innerWidth <= 768){
      if ( this.mobileButton) {
        if(document.documentElement.scrollTop >= 100){
          if (this.mobileButton.className.indexOf("show")<0)
          {
            setTimeout(() => {
              this.mobileButton.classList.add('show')
            }, 200)
          }
        }
        else {
          if(document.documentElement.scrollTop < 150){
            if (this.mobileButton.className.indexOf("show")>=0)
            {
              setTimeout(() => {
                this.mobileButton.classList.remove("show")

              }, 200)
            }
          }
        }
      }
    }
    else{
      if ( this.mobileButton) {
        if(document.documentElement.scrollTop >= 100){
          if (this.headerMenuScroll.className.indexOf("show")<0)
          {
            setTimeout(() => {
              this.headerMenuScroll.classList.add('show')
            }, 0)
          }
        }
        else {
          if(document.documentElement.scrollTop < 150){
            if (this.headerMenuScroll.className.indexOf("show")>=0)
            {
              setTimeout(() => {
                this.headerMenuScroll.classList.remove("show")

              }, 0)
            }
          }
        }
      }
    }
  }
  render () {
    const {phone, email} = this.props.settings
    return (
      <header>
        <div className='header-info hidden-md'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 hidden-md-down'>
                <img src={require('./assets/LOGO.png')}
                  alt='homepage'
                  className='light-logo header-info__logo img-responsive'
                     width={60}
                     height={60}
                />
              </div>
              <div className='col-md-6 header-info__right'>
                <a href="https://www.facebook.com/DichvuThueXeTTB/" target="_blank" className='header-info__phone '><i className='fa fa-phone' /><span>‎{phone}</span></a>
                  <a href="https://www.facebook.com/DichvuThueXeTTB/" target="_blank" className='header-info__email'><i className='ti-email' /><span>{email}</span></a>
                <a href="https://www.facebok.com/DichvuThueXeTTB/" target="_blank" className='header-info__fb'><i className='fa fa-facebook-square' /> <span>follow us</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className='header-menu navbar-collapse '>
          <div className='container' >
            <a
              href='javascript:void(0)'
              onClick={this.toggleMobileMenu}
              className='header-menu-mobile__button'
            >
              <i className='ti-menu' />
            </a>
            <a
              href='javascript:void(0)'
              onClick={this.toggleMobileMenu}
              ref={(ref) => { this.mobileButton = ref }}
              className='scroll-menu-button'
            >
              <i className='ti-menu' />
            </a>
          </div>
          <div
            className={`container header-menu__mobile`}
            ref={(menuMobile) => { this.menuMobile = menuMobile }}
          >
            <nav className='navbar top-navbar navbar-expand-md'>
              <ul className='navbar-nav'>
                <a href="javascript:void(0)" onClick={() => this.onRoute('/')} className='nav-item'>Trang chủ</a>
                <a href="javascript:void(0)" onClick={() => this.onRoute('/thue-xe/hop-dong')} className='nav-item'>Thuê xe hợp đồng</a>
                <a href="javascript:void(0)" onClick={() => this.onRoute('/thue-xe/du-lich')} className='nav-item'>Thuê xe du lịch</a>
                <a href="javascript:void(0)" onClick={() => this.onRoute('/thue-xe/tu-lai')} className='nav-item'>Thuê xe tự lái</a>
                <li className='dropdown nav-item'>
                  <a href="javascript:void(0)"  id="nav-2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dịch vụ khác</a>
                  <ul className='dropdown-menu' aria-labelledby="nav-2">
                    <li className='dropdown-item'><a href="javascript:void(0)" onClick={() => this.onRoute('/dich-vu/lam-visa')}>LÀM VISA</a></li>
                    <li className='dropdown-item'><a href="javascript:void(0)" onClick={() => this.onRoute('/dich-vu/dich-thuat')}>DỊCH THUẬT</a></li>
                    <li className='dropdown-item'><a href="javascript:void(0)" onClick={() => this.onRoute('/dich-vu/ve-may-bay')}>VÉ MÁY BAY</a></li>
                  </ul>
                </li>
                <li className='dropdown nav-item'>
                  <a href="javascript:void(0)"  id="nav-2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tin tức</a>
                  <ul className='dropdown-menu' aria-labelledby="nav-2">
                    <li className='dropdown-item'><a href="javascript:void(0)" onClick={() => this.onRoute('/tin-tuc/du-lich-mien-trung')}>Du lịch miền trung</a></li>
                    <li className='dropdown-item'><a href="javascript:void(0)" onClick={() => this.onRoute('/tin-tuc/thong-tin-thue-xe')}>Thông tin thuê xe</a></li>
                    <li className='dropdown-item'><a href="javascript:void(0)" onClick={() => this.onRoute('/tin-tuc/tin-tuc-va-su-kien')}>Tin tức và sự kiện</a></li>
                  </ul>
                </li>
                <a href="javascript:void(0)" onClick={() => this.onRoute('/lien-he')} className='nav-item'>Liên hệ</a>
                <a href='javascript:void(0)' className='header-menu__close' onClick={this.toggleMobileMenu} ><i className='ti-close' /></a>
              </ul>
            </nav>
          </div>
        </div>
        <div className='header-menu__scroll header-menu navbar-collapse'
          ref={(ref)=>{ this.headerMenuScroll = ref}}
        >
          <div className="container">
            <nav className='navbar top-navbar navbar-expand-md'>
              <ul className='navbar-nav'>
                <a href="javascript:void(0)" onClick={() => this.onRoute('/')} className='nav-item'>Trang chủ</a>
                <a href="javascript:void(0)" onClick={() => this.onRoute('/thue-xe/hop-dong')} className='nav-item'>Thuê xe hợp đồng</a>
                <a href="javascript:void(0)" onClick={() => this.onRoute('/thue-xe/du-lich')} className='nav-item'>Thuê xe du lịch</a>
                <a href="javascript:void(0)" onClick={() => this.onRoute('/thue-xe/tu-lai')} className='nav-item'>Thuê xe tự lái</a>
                <li className='dropdown nav-item'>
                  <a href="javascript:void(0)"  id="nav-2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dịch vụ khác</a>
                  <ul className='dropdown-menu' aria-labelledby="nav-2">
                    <li className='dropdown-item'><a href="javascript:void(0)" onClick={() => this.onRoute('/dich-vu/lam-visa')}>LÀM VISA</a></li>
                    <li className='dropdown-item'><a href="javascript:void(0)" onClick={() => this.onRoute('/dich-vu/dich-thuat')}>DỊCH THUẬT</a></li>
                    <li className='dropdown-item'><a href="javascript:void(0)" onClick={() => this.onRoute('/dich-vu/ve-may-bay')}>VÉ MÁY BAY</a></li>
                  </ul>
                </li>
                <li className='dropdown nav-item'>
                  <a href="javascript:void(0)"  id="nav-2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tin tức</a>
                  <ul className='dropdown-menu' aria-labelledby="nav-2">
                    <li className='dropdown-item'><a href="javascript:void(0)" onClick={() => this.onRoute('/tin-tuc/du-lich-mien-trung')}>Du lịch miền trung</a></li>
                    <li className='dropdown-item'><a href="javascript:void(0)" onClick={() => this.onRoute('/tin-tuc/thong-tin-thue-xe')}>Thông tin thuê xe</a></li>
                    <li className='dropdown-item'><a href="javascript:void(0)" onClick={() => this.onRoute('/tin-tuc/tin-tuc-va-su-kien')}>Tin tức và sự kiện</a></li>
                  </ul>
                </li>
                <a href="javascript:void(0)" onClick={() => this.onRoute('/lien-he')} className='nav-item'>Liên hệ</a>
                <a href='javascript:void(0)' className='header-menu__close' onClick={this.toggleMobileMenu} ><i className='ti-close' /></a>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}
Header.propTypes = {
}
