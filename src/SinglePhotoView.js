import React, { Component } from 'react'
import './main.css'

class SinglePhotoView extends Component {
  render () {
    console.log(this.props.currentAlbum.photo[0].url)
    return <div className='SinglePhotoView'>
      <header>
        <span><a href='./album.html'><button type='button' name='button'>Back to Album 1</button></a></span><h1>Photo 1</h1>
      </header>
      <main>
        <div className='bigImageContainer'>
          <img className='bigImage' height='500px' width='500px' src={this.props.currentAlbum.photo[0].url} alt='cat' />
        </div>
      </main>
    </div>
  }
}

export default SinglePhotoView
