import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"
function Gallery(props) {
  return (
    <section className="gallery">
      <div className="gallery-container">
        <div className="box-gallery orange">
          <button className="btn btn-gallery">
            Organic Juice
          </button>
        </div>
        <div className="box-gallery food">
          <button className="btn btn-gallery">
            Organic Food
          </button>
        </div>
        <div className="box-gallery cookis">
          <button className="btn btn-gallery">
            Nuts Cookis
          </button>
        </div>
      </div>
    </section>
  )
}

Gallery.propTypes = {}

export default Gallery
