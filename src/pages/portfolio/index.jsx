import React from "react"
import PropTypes from "prop-types"
import pic1 from "../../assets/img/port1.png"
import pic2 from "../../assets/img/port2.png"
import pic3 from "../../assets/img/port3.png"
import pic4 from "../../assets/img/port4.png"
import pic5 from "../../assets/img/port5.png"
import pic6 from "../../assets/img/port6.png"
import pic from "../../assets/img/portfolioBanner.png";
import BannerImg from "../../components/bannerImg"
import "./style.scss";
function Portfolio(props) {
  return (
    <div className='portfolio'>
      <BannerImg pic={pic} />
      <div className='container'>
        <div className='portfolio-container'>
          <div className='box-info'>
            <img src={pic1} alt='' />
            <p className='box-info__name'>Green & Tasty Lemon</p>
            <p className='box-info__tag'>Fruits</p>
          </div>
          <div className='box-info'>
            <img src={pic2} alt='' />
            <p className='box-info__name'>Organic Carrot</p>
            <p className='box-info__tag'>Farmer</p>
          </div>
          <div className='box-info'>
            <img src={pic3} alt='' />
            <p className='box-info__name'>Organic Betel Leaf</p>
            <p className='box-info__tag'>Leaf</p>
          </div>
          <div className='box-info'>
            <img src={pic4} alt='' />
            <p className='box-info__name'>Black Raspberry</p>
            <p className='box-info__tag'>Farmer</p>
          </div>
          <div className='box-info'>
            <img src={pic5} alt='' />
            <p className='box-info__name'>Honey Orange</p>
            <p className='box-info__tag'>Farmer</p>
          </div>
          <div className='box-info'>
            <img src={pic6} alt='' />
            <p className='box-info__name'>Green & Tasty Lemon</p>
            <p className='box-info__tag'>Fruits</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Portfolio.propTypes = {}

export default Portfolio
