import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"
import avatar from "../../assets/img/avatar.jpg";
function Counter(props) {
  return (
    <section className="counter">
      <div className="container">
        <div className="counter-container">
          <p className="counter-title">Testimonial</p>
          <p className="counter-question">What Our Customer Saying?</p>
          <div className="counter-people">
            <img src={avatar} alt="" className="avatar-counter" />
            <div className="box-start">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            </div>
            <p className="counter-people-text">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
            </p>
            <p className="counter-people-name">Sara Taylor</p>
            <p className="counter-people-position">Consumer</p>
          </div>
          <div className="counter-box">
            <div className="circle-counter">
              <p className="circle-counter-number">100%</p>
              <p className="circle-counter-text">Organic</p>
            </div>
            <div className="circle-counter">
              <p className="circle-counter-number">285</p>
              <p className="circle-counter-text">Active Product</p>
            </div>
            <div className="circle-counter">
              <p className="circle-counter-number">350+</p>
              <p className="circle-counter-text">Organic Orcharts</p>
            </div>
            <div className="circle-counter">
              <p className="circle-counter-number">25+</p>
              <p className="circle-counter-text">Years of Farming</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Counter.propTypes = {}

export default Counter
