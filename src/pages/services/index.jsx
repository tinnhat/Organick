import React from "react"
import PropTypes from "prop-types"
import BannerImg from "../../components/bannerImg"
import pic from "../../assets/img/servicesBanner.jpg"
import ServiceInfo from "../../components/serviceInfo"
import Videos from "../../components/videos"

function Service(props) {
  return (
    <div className='service'>
      <BannerImg pic={pic} />
      <ServiceInfo />
      <Videos />
    </div>
  )
}

Service.propTypes = {}

export default Service
