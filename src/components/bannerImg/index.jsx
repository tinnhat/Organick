import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"
function BannerImg(props) {
  const {pic} = props
  return (
    <section className='banner-img'>
      <img src={pic} alt="" />
    </section>
  )
}

BannerImg.propTypes = {}

export default BannerImg
