import React, { Component } from 'react'
import './main.css'

class AlbumSidebar extends Component {
  navigateToNewAlbum = (e) => {
    e.preventDefault()
    this.props.navigate('home', this.props.album)
  }

  render() {
    return  <div className='sidebar'>
    <nav className='sidebarNav'>
      <ul className='sidebarNavList'>
        <li className='sidebarNavListItems'><button onClick={this.navigateToNewAlbum} type='button' name='button'>Album 1</button></li>
        <li className='sidebarNavListItems'><button onClick={this.navigateToAlbum} type='button' name='button'>Album 2</button></li>
        <li className='sidebarNavListItems'><button type='button' name='button'>Album 3</button></li>
        <li className='sidebarNavListItems'><button type='button' name='button'>Album 4</button></li>
        <li className='sidebarNavListItems'><button type='button' name='button'>Album 5</button></li>
        <li className='sidebarNavListItems'><button type='button' name='button'>Album 6</button></li>
        <li className='sidebarNavListItems'><button type='button' name='button'>Home</button></li>
      </ul>
    </nav>
    </div>
  }
}

export default AlbumSidebar
