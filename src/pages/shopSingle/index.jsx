import React from 'react'
import PropTypes from 'prop-types'
import pic from "../../assets/img/shop-single.jpg"
import BannerImg from '../../components/bannerImg'
import RelatedProduct from '../../components/relatedProduct'
import SingleProductDetail from '../../components/singleProductDetail'


function ShopSingle(props) {
  return (
    <section className='shop-single'>
      <BannerImg pic={pic} />
      <SingleProductDetail/>
      <RelatedProduct/>

    </section>
  )
}

ShopSingle.propTypes = {}

export default ShopSingle
