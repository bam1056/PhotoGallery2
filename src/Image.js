import React, { Component } from 'react'
import './main.css'

class Image extends Component {
  render () {
    return <div className='galleryImage'>
      <a href=''><img className='imageGallery' src={this.props.image.url} alt='cat' /></a>
      <div className='descriptions'><h4>{this.props.image.name}</h4><h3>{this.props.image.description}</h3></div>
    </div>
  }
}
export default Image
