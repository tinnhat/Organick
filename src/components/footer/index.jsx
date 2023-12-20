import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
import logo from "../../assets/img/Logo.svg"
function Footer(props) {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-container'>
          <div className='footer-contact'>
            <p className='footer-title'>Contact Us</p>
            <p className='footer-sub-title'>Email</p>
            <p className='footer-text'>needhelp@Organia.com</p>
            <p className='footer-sub-title'>Phone</p>
            <p className='footer-text'>666 888 888</p>
            <p className='footer-sub-title'>Address</p>
            <p className='footer-text'>88 road, borklyn street, USA</p>
          </div>
          <div className='footer-mid'>
            <a href="" className='logo-footer'>
              <img src={logo} alt='' />
              <p>Organick</p>
            </a>
            <p className='footer-mid-text'>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </p>
            <div className='footer-icon'>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-facebook'></i>
              <i className='fa-brands fa-twitter'></i>
              <i className='fa-brands fa-youtube'></i>
            </div>
          </div>
          <div className='footer-page'>
            <p className='footer-title'>Utility Pages</p>
            <p className='footer-page-name'>Style Guide</p>
            <p className='footer-page-name'>404 Not Found</p>
            <p className='footer-page-name'>Password Protected</p>
            <p className='footer-page-name'>Licences</p>
            <p className='footer-page-name'>Changelog</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
