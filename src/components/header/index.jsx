import React from 'react'
import PropTypes from 'prop-types'
import logo from "../../assets/img/Logo.svg";
import "./style.scss"
function Header(props) {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-container">
          <a className="header-logo" href='/'>
            <img src={logo} alt="" className='logo-img' />
            <p className="header-logo-name">Organick</p>
          </a>
          <div className="header-menu-mobile">
          <i className="fa-solid fa-bars"></i>
          </div>
          <ul className="header-menu-list">
            <li className="header-menu-item"><a href="/" className="header-menu-item-link">Home</a></li>
            <li className="header-menu-item"><a href="/about" className="header-menu-item-link">About</a></li>
            <li className="header-menu-item"><a href="/portfolio" className="header-menu-item-link">Portfolio</a></li>
            <li className="header-menu-item"><a href="/shop" className="header-menu-item-link">Shop</a></li>
            <li className="header-menu-item"><a href="/shop-single" className="header-menu-item-link">Shop Single</a></li>
            <li className="header-menu-item"><a href="/service" className="header-menu-item-link">Services</a></li>
            <li className="header-menu-item"><a href="/quality" className="header-menu-item-link">Quality</a></li>
          </ul>
          <div className="header-box-cart">
            <div className="icon-box">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="cart-box">
              <i className="fa-solid fa-cart-shopping"></i>
              <p className="cart-box-number">Cart(0)</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
