import React from "react"
import PropTypes from "prop-types"
import group1 from "../../assets/img/Group1.svg"
import group2 from "../../assets/img/Group2.png"
import "./style.scss"
function About(props) {
  return (
    <section className='about'>
      <div className='container'>
        <div className='about-container'>
          <div className='about-box-img'>
          </div>
          <div className='about-box-content'>
            <p className='about-title'>About Us</p>
            <p className='about-sub-title'>
              We Believe in Working Accredited Farmers
            </p>
            <p className='about-text'>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className='about-sub-box'>
              <p className='about-sub-icon'>
                <img src={group1} alt="" />
              </p>
              <div className='sub-box-content'>
                <p className='sub-box-content-title'>Organic Foods Only</p>
                <p className='sub-box-content-text'>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className='about-sub-box'>
              <p className='about-sub-icon'>
                <img src={group2} alt="" />
              </p>
              <div className='sub-box-content'>
                <p className='sub-box-content-title'>Quality Standards</p>
                <p className='sub-box-content-text'>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <button className="btn btn-about">Shop Now  <span><i className="fa-solid fa-arrow-right"></i></span></button>
          </div>
        </div>
      </div>
    </section>
  )
}

About.propTypes = {}

export default About
