import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
import pic from "../../assets/img/Photo.jpg"
function SingleProductDetail(props) {
  return (
    <section className='single-product'>
      <div className='container'>
        <div className='product-container'>
          <div className='img-box-product'>
            <p className='category'>Millets</p>
            <img src={pic} alt='' />
          </div>
          <div className='product-info'>
            <p className='product-name'>Health Pistachios</p>
            <div className='rating-box'>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
            </div>
            <p className="product-price"><span>$20.00</span>$13.00</p>
            <p className="product-info-text">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <div className="box-quantity">
              <p>Quantity: </p>
              <input type="number" defaultValue={1} />
              <button className="btn btn-add-cart">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="product-detail">
          <p className="product-desc">Product Description</p>
          <p className="product-addition">Additional Info</p>
         
        </div>
        <p className="detail">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
      </div>
    </section>
  )
}

SingleProductDetail.propTypes = {}

export default SingleProductDetail
