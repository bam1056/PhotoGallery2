import React, { Component } from 'react'
import './main.css'

class AlbumSidebarButton extends Component {
  // eslint-disable-next-line
  navigateToNewAlbum = (e) => {
    e.preventDefault()
    this.props.navigate('album', this.props.album)
  }

  render() {
    return  <li className='sidebarNavListItems'><button onClick={this.navigateToNewAlbum} type='button' name='button'>{this.props.album.name}</button></li>

  }
}

export default AlbumSidebarButton
