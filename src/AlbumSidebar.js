import React, { Component } from 'react'
import './main.css'
import AlbumSidebarButton from './AlbumSidebarButton'

class AlbumSidebar extends Component {
  navigateHome = (e) => {
    e.preventDefault()
    this.props.navigate('home', this.props.albums[0])
  }

  render () {
    return <div className='sidebar'>
    <nav className='sidebarNav'>
      <ul className='sidebarNavList'>
        <AlbumSidebarButton navigate={this.props.navigate} album={this.props.albums[0]} />
        <AlbumSidebarButton navigate={this.props.navigate} album={this.props.albums[1]} />
        <AlbumSidebarButton navigate={this.props.navigate} album={this.props.albums[2]} />
        <AlbumSidebarButton navigate={this.props.navigate} album={this.props.albums[3]} />
        <AlbumSidebarButton navigate={this.props.navigate} album={this.props.albums[4]} />
        <AlbumSidebarButton navigate={this.props.navigate} album={this.props.albums[5]} />
        <li className='sidebarNavListItems'><button onClick={this.navigateHome} type='button' name='button'>Home</button></li>
      </ul>
    </nav>
    </div>
  }
}

export default AlbumSidebar
