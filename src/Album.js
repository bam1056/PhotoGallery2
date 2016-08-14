import React, { Component } from 'react'
import AlbumSidebar from './AlbumSidebar'
import Image from './Image'
import './main.css'

class Album extends Component {
  render () {
    return <div className='album'>
      <AlbumSidebar navigate={this.props.navigate} albums={this.props.albums} currentAlbum={this.props.currentAlbum} />
      <article>
        <h1 className='galleryHead'>{this.props.currentAlbum.name}</h1>
        <div className='galleryOfImages'>
          <Image navigateImage={this.props.navigateImage} currentAlbum={this.props.currentAlbum} image={this.props.currentAlbum.photo[0]} />
          <Image navigateImage={this.props.navigateImage} currentAlbum={this.props.currentAlbum} image={this.props.currentAlbum.photo[1]} />
          <Image navigateImage={this.props.navigateImage} currentAlbum={this.props.currentAlbum} image={this.props.currentAlbum.photo[2]} />
          <Image navigateImage={this.props.navigateImage} currentAlbum={this.props.currentAlbum} image={this.props.currentAlbum.photo[3]} />
          <Image navigateImage={this.props.navigateImage} currentAlbum={this.props.currentAlbum} image={this.props.currentAlbum.photo[4]} />
          <Image navigateImage={this.props.navigateImage} currentAlbum={this.props.currentAlbum} image={this.props.currentAlbum.photo[5]} />
        </div>
      </article>
    </div>
  }
}
export default Album
