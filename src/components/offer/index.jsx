import React from "react"
import PropTypes from "prop-types"
import product1 from "../../assets/img/product1.png"
import product2 from "../../assets/img/product2.png"
import product3 from "../../assets/img/product3.png"
import product4 from "../../assets/img/product4.png"
import "./style.scss"

function Offer(props) {
  return (
    <section className='offer'>
      <div className='container'>
        <div className='offer-container'>
          <div className='header-offer-box'>
            <div className='left'>
              <p className='left-title'>Offer</p>
              <p className='left-text'>We Offer Organic For You</p>
            </div>
            <button className='btn btn-offer'>
              View All Product{" "}
              <span>
                <i className='fa-solid fa-arrow-right'></i>
              </span>
            </button>
          </div>
          <div className='row-products'>
            <div className='product-box'>
              <div className='product-tag'>Vegetable</div>
              <img src={product1} alt='' className='product-img' />
              <p className='product-name'>Calabrese Broccoli</p>
              <div className='straight'></div>
              <div className='price-start-box'>
                <div className='price-box'>
                  <p className='price-old'>$20.00</p>
                  <p className='price-sale'>$13.00</p>
                </div>
                <div className='start-box'>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                </div>
              </div>
            </div>
            <div className='product-box'>
                <div className='product-tag'>Fresh</div>
                <img src={product2} alt='' className='product-img' />
                <p className='product-name'>Fresh Banana Fruites</p>
                <div className='straight'></div>
                <div className='price-start-box'>
                  <div className='price-box'>
                    <p className='price-old'>$20.00</p>
                    <p className='price-sale'>$14.00</p>
                  </div>
                  <div className='start-box'>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                  </div>
                </div>
              </div>
              <div className='product-box'>
                <div className='product-tag'>Millets</div>
                <img src={product3} alt='' className='product-img' />
                <p className='product-name'>White Nuts</p>
                <div className='straight'></div>
                <div className='price-start-box'>
                  <div className='price-box'>
                    <p className='price-old'>$20.00</p>
                    <p className='price-sale'>$15.00</p>
                  </div>
                  <div className='start-box'>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                  </div>
                </div>
              </div>
              <div className='product-box'>
                <div className='product-tag'>Vegetable</div>
                <img src={product4} alt='' className='product-img' />
                <p className='product-name'>Vegan Red Tomato</p>
                <div className='straight'></div>
                <div className='price-start-box'>
                  <div className='price-box'>
                    <p className='price-old'>$20.00</p>
                    <p className='price-sale'>$17.00</p>
                  </div>
                  <div className='start-box'>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Offer.propTypes = {}

export default Offer
