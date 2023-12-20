import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
function Videos(props) {
  return (
    <section className='video'>
      <p className='video-title'>Organic Only</p>
      <p className='video-sub-title'>Everyday Fresh & Clean</p>
      <p className='video-text'>
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the{" "}
      </p>
      <i class="fa-solid fa-play"></i>
    </section>
  )
}

Videos.propTypes = {}

export default Videos
