import React, { Component } from 'react'
import './main.css'

class Image extends Component {
  navigateToAlbumImage = (e) => {
    e.preventDefault()
    this.props.navigateImage('photo', this.props.image)
  }
  render () {
    return <div className='galleryImage'>
      <img onClick={this.navigateToAlbumImage} className='imageGallery' src={this.props.image.url} alt='cat' />
      <div className='descriptions'><h4>{this.props.image.name}</h4><h3>{this.props.image.description}</h3></div>
    </div>
  }
}
export default Image
