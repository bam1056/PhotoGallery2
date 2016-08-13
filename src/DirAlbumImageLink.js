import React, { Component } from 'react'
import './main.css'

class DirAlbumImageLink extends Component {
  render () {
    return <div className='gallery'>
      <img className='imageGallery' src={this.props.albumInfo.url} alt='cat gallery'/>
      <div className='descriptions'><h4>{this.props.albumInfo.name}</h4></div>
    </div>
  }
}
export default DirAlbumImageLink
