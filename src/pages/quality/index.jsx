import React from "react"
import PropTypes from "prop-types"
import BannerImg from "../../components/bannerImg"
import pic from "../../assets/img/qualityBanner.png"
import ServiceSingle from "../../components/serviceSingle"

function Quality(props) {
  return (
    <div className='quality'>
      <BannerImg pic={pic} />
      <ServiceSingle />
    </div>
  )
}

Quality.propTypes = {}

export default Quality
