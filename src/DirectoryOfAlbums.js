import React, { Component } from 'react'
import './main.css'
import DirAlbumImageLink from './DirAlbumImageLink'

class DirectoryOfAlbums extends Component {
  render () {
    return <div className='DirectoryOfAlbums'>
      <header>
        <h1>My Albums</h1>
      </header>
      <main>
        <DirAlbumImageLink albumInfo={this.props.albums[0]} navigate={this.props.navigate} />
        <DirAlbumImageLink albumInfo={this.props.albums[1]} navigate={this.props.navigate} />
        <DirAlbumImageLink albumInfo={this.props.albums[2]} navigate={this.props.navigate} />
        <DirAlbumImageLink albumInfo={this.props.albums[3]} navigate={this.props.navigate} />
        <DirAlbumImageLink albumInfo={this.props.albums[4]} navigate={this.props.navigate} />
        <DirAlbumImageLink albumInfo={this.props.albums[5]} navigate={this.props.navigate} />
      </main>
    </div>
  }
}

export default DirectoryOfAlbums

{/* <main>
<div className='gallery one'>
  <img className='imageGallery' src={this.props.albums[0].url} alt='cat gallery' />
  <div className='descriptions'><h4>Album1</h4></div>
</div>

<div className='gallery two'>
<img className='imageGallery' src={this.props.albums[1].url} alt='bat gallery' />
  <div className='descriptions'><h4>Album2</h4></div>
</div>

<div className='gallery three'>
<img className='imageGallery' src={this.props.albums[2].url} alt='mat gallery' />
  <div className='descriptions'><h4>Album3</h4></div>
</div>

<div className='gallery four'>
<img className='imageGallery' src={this.props.albums[3].url} alt='that gallery' />
  <div className='descriptions'><h4>Album4</h4></div>
</div>

<div className='gallery five'>
<img className='imageGallery' src={this.props.albums[4].url} alt='hat gallery' />
  <div className='descriptions'><h4>Album5</h4></div>
</div>

<div className='gallery six'>
<img className='imageGallery' src={this.props.albums[5].url} alt='rat gallery' />
  <div className='descriptions'><h4>Album6</h4></div>
</div> */}
