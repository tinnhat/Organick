import React from "react"
import PropTypes from "prop-types"
import pic from "../../assets/img/snack-services.png"
import "./style.scss"
function ServiceInfo(props) {
  return (
    <section className='service-info'>
      <div className='container'>
        <div className='service-info-container'>
          <p className='service-info-title'>What we Grow</p>
          <p className='service-info-sub-title'>
            Better Agriculture for Better Future
          </p>
          <div className='service-info-box'>
            <div className='box text-right'>
              <div className='child-box'>
                <p className='child-box__title'>Daily Product</p>
                <p className='child-box__text'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
              <div className='child-box'>
                <p className='child-box__title'>Store Services</p>
                <p className='child-box__text'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
              <div className='child-box'>
                <p className='child-box__title'>Delivery Services</p>
                <p className='child-box__text'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
            </div>
            <div className='center-box'>
              <img src={pic} alt='' />
            </div>
            <div className='box text-left'>
              <div className='child-box'>
                <p className='child-box__title'>Agricultural Services</p>
                <p className='child-box__text'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
              <div className='child-box'>
                <p className='child-box__title'>Organic Products</p>
                <p className='child-box__text'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
              <div className='child-box'>
                <p className='child-box__title'>Fresh Vegetables</p>
                <p className='child-box__text'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </div>
            </div>
          </div>
          <button className="btn btn-service">Explore More</button>
        </div>
      </div>
    </section>
  )
}

ServiceInfo.propTypes = {}

export default ServiceInfo
