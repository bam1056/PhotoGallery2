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
