import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
function ErrorPage(props) {
  return (
    <section className='error'>
      <div className='container'>
        <div className='err-container'>
          <p className='title'>404</p>
          <p className='sub-title'>Page not found</p>
          <p className='text'>
            The page you are looking for doesn't exist or has been moved
          </p>
          <button className='btn btn-error'>Go to Homepage</button>
        </div>
      </div>
    </section>
  )
}

ErrorPage.propTypes = {}

export default ErrorPage
