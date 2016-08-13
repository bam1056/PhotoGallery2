import React, { Component } from 'react'
import './main.css'
import AlbumSidebar from './AlbumSidebar'
import Image from './Image'

class Album extends Component {
  render () {
    return <div className='album'>
      <AlbumSidebar navigate={this.props.navigate} albums={this.props.albums} currentAlbum={this.props.currentAlbum} />
      <article>
        <h1 className='galleryHead'>{this.props.currentAlbum.name}</h1>
        <div className='galleryOfImages'>
          <Image navigate={this.props.navigate} image={this.props.currentAlbum.photo[0]} />
          <Image navigate={this.props.navigate} image={this.props.currentAlbum.photo[1]} />
          <Image navigate={this.props.navigate} image={this.props.currentAlbum.photo[2]} />
          <Image navigate={this.props.navigate} image={this.props.currentAlbum.photo[3]} />
          <Image navigate={this.props.navigate} image={this.props.currentAlbum.photo[4]} />
          <Image navigate={this.props.navigate} image={this.props.currentAlbum.photo[5]} />
        </div>
      </article>
    </div>
  }
}

export default Album
