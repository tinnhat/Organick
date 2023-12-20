import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
import picture from "../../assets/img/whoweare.png"
function WhoWeAre(props) {
  return (
    <section className='whoWeAre'>
      <div className='whoWeAre-picture-box'>
        <img src={picture} alt='' />
      </div>
      <div className='whoWeAre-content-box'>
        <div className='content-box'>
          <p className='content-title'>Eco Friendly</p>
          <p className='content-header'>Econis is a Friendly Organic Store</p>
          <p className='content-text'>Start with Our Company First</p>
          <p className='content-sub-text'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
          <p className='content-text'>Learn How to Grow Yourself</p>
          <p className='content-sub-text'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
          <p className='content-text'>Farming Strategies of Today</p>
          <p className='content-sub-text'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
      </div>
    </section>
  )
}

WhoWeAre.propTypes = {}

export default WhoWeAre
