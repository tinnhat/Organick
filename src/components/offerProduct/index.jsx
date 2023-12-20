import React from 'react'
import PropTypes from 'prop-types'
import product1 from "../../assets/img/offerProduct1.jpg"
import product2 from "../../assets/img/offerProduct2.jpg"
import product3 from "../../assets/img/offerProduct3.jpg"
import product4 from "../../assets/img/offerProduct4.jpg"
import "./style.scss"
function OfferProduct(props) {
  return (
    <section className="offer-product">
      <div className="container">
        <div className="offer-product-container">
          <p className="offer-product-title">About Us</p>
          <p className="offer-product-sub-title">What We Offer for You</p>
          <div className="list-product">
            <div className="product-info">
              <img src={product1} alt="" />
              <p className="product-name">Spicy</p>
            </div>
            <div className="product-info">
              <img src={product2} alt="" />
              <p className="product-name">Nuts & Feesd</p>
            </div>
            <div className="product-info">
              <img src={product3} alt="" />
              <p className="product-name">Fruits</p>
            </div>
            <div className="product-info">
              <img src={product4} alt="" />
              <p className="product-name">Vegetable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

OfferProduct.propTypes = {}

export default OfferProduct
