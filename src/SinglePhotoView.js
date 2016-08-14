import React, { Component } from 'react'
import './main.css'

class SinglePhotoView extends Component {
  navigateBackToAlbum = (e) => {
    e.preventDefault()
    this.props.navigate('album', this.props.currentAlbum)
  }
  render () {
    return <div className='SinglePhotoView'>
      <header>
        <button className='specialButton' onClick={this.navigateBackToAlbum} type='button' name='button'>Back to {this.props.currentAlbum.name}</button><h1>{this.props.currentImage.name}</h1>
      </header>
      <main>
        <div className='bigImageContainer'>
          <img className='bigImage' height='500px' width='500px' src={this.props.currentImage.url} alt='cat' />
        </div>
      </main>
    </div>
  }
}
export default SinglePhotoView
