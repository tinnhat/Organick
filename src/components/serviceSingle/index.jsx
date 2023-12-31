import React from "react"
import PropTypes from "prop-types"
import pic from "../../assets/img/PhotoSS.png"
import pic1 from "../../assets/img/pic1.png"
import pic2 from "../../assets/img/pic2.jpg"

import "./style.scss"
function ServiceSingle(props) {
  return (
    <section className='service-single'>
      <div className='container'>
        <div className='ss-container'>
          <img src={pic} alt='' />
          <div className='ss-box__info'>
            <p className='ss-box__title'>Organic Store Services</p>
            <p className='ss-box__text'>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className='ss-box__text'>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and auncover many web
              sites still in their infancy. Various versions have evolved over
              the years
            </p>
            <div className='ss-box__img'>
              <div className='box-img'>
                <img src={pic1} alt='' />
              </div>
              <div className='box-content'>
                <p className='box-content__title'>Why Organic</p>
                <p className='box-content__text'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  page editors now use Lorem Ipsum as their default model text,
                  and auncover.
                </p>
              </div>
            </div>
            <div className='ss-box__img'>
              <div className='box-content'>
                <p className='box-content__title'>Speciality Produce</p>
                <p className='box-content__text'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  page editors now use Lorem Ipsum as their default model text,
                  and auncover.
                </p>
              </div>
              <div className='box-img'>
                <img src={pic2} alt='' />
              </div>
            </div>
            <p className="ss-box__sub-title">We farm your land</p>
            <p className="ss-box__text">It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <div className="ss-box-quantity">
              <div className="quantity-box">
                <p className="number">01</p>
                <p className="text">Best quality support</p>
              </div>
              <div className="quantity-box">
                <p className="number">02</p>
                <p className="text">Money back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ServiceSingle.propTypes = {}

export default ServiceSingle
