import React from "react"
import PropTypes from "prop-types"
import pic from "../../assets/img/whyChooseUs.png"
import icon1 from "../../assets/img/Icon-choose-1.svg"
import icon2 from "../../assets/img/Icon-choose-2.png"
import icon3 from "../../assets/img/Icon-choose-3.png"
import icon4 from "../../assets/img/Icon-choose-4.png"
import "./style.scss";
function WhyChooseUs(props) {
  return (
    <section className='choos'>
      <div className='container'>
        <div className='choos-container'>
          <div className='choos-content-box'>
            <p className='title'>Why choose us?</p>
            <p className='sub-title'>
              We do not buy from the open market & traders.
            </p>
            <p className='content-text'>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div className='sub-info-box'><i className="fa-solid fa-circle-dot"></i> 100% Natural Product</div>
            <p className='sub-info-text'>
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
            <div className='sub-info-box'><i className="fa-solid fa-circle-dot"></i> Increases resistance</div>
            <p className='sub-info-text'>
              Filling, and temptingly healthy, our Biona Organic Granola with
              Wild Berries is just the thing
            </p>
          </div>
          <div className='choos-img-box'>
            <img src={pic} alt='' />
          </div>
        </div>
        <div className='choos-info-box'>
          <div className='tab'>
            <div className="box-icon">
              <img src={icon1} alt="" />
            </div>
            <p className='tab-title'>Return Policy</p>
            <p className='tab-text'>
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
          <div className='tab'>
          <div className="box-icon">
              <img src={icon2} alt="" />
            </div>
            <p className='tab-title'>Return Policy</p>
            <p className='tab-text'>
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
          <div className='tab'>
          <div className="box-icon">
              <img src={icon3} alt="" />
            </div>
            <p className='tab-title'>Return Policy</p>
            <p className='tab-text'>
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
          <div className='tab'>
          <div className="box-icon">
              <img src={icon4} alt="" />
            </div>
            <p className='tab-title'>Return Policy</p>
            <p className='tab-text'>
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

WhyChooseUs.propTypes = {}

export default WhyChooseUs
