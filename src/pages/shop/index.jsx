import React from 'react'
import PropTypes from 'prop-types'
import BannerImg from '../../components/bannerImg'
import pic from "../../assets/img/shop-page.png"
import DetailShop from '../../components/detailShop'

function Shop(props) {
  return (
    <div className='shop-page'>
      <BannerImg pic={pic} />
      <DetailShop/>
    </div>
  )
}

Shop.propTypes = {}

export default Shop
