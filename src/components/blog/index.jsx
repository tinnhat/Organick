import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss";
function Blog(props) {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog-container">
          <p className="blog-title">News</p>
          <div className="blog-header">
            <p className="blog-header-text">
            Discover weekly content about organic food, & more
            </p>
            <button className="btn btn-blog">More News</button>
          </div>
          <div className="blog-content">
            <div className="blog-box bkg-vegetable">
              <div className="blog-circle-date">25<br/>Nov</div>
              <div className="blog-box-content">
                <p className="blog-author">By Rachi Card</p>
                <p className="blog-box-content-title">The Benefits of Vitamin D & How to Get It</p>
                <p className="blog-box-content-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                <button className="btn btn-blog-box">Read More</button>
              </div>
            </div>
            <div className="blog-box bkg-tomato">
              <div className="blog-circle-date">25<br/>Nov</div>
              <div className="blog-box-content">
                <p className="blog-author">By Rachi Card</p>
                <p className="blog-box-content-title">The Benefits of Vitamin D & How to Get It</p>
                <p className="blog-box-content-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                <button className="btn btn-blog-box">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Blog.propTypes = {}

export default Blog
