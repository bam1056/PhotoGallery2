import React, { Component } from 'react'
import './main.css'

class DirAlbumImageLink extends Component {
  constructor () {
    super()
    this.state = {
      width: 200,
      height: 300
    }
  }
  navigateToAlbum = (e) => {
    e.preventDefault()
    this.props.navigate('album', this.props.albumInfo)
  }
  increaseSize = (e) => {
    console.log("INCREASE ME");
    this.setState({width: 250, height: 400})
  }
  decreaseSize = (e) => {
    console.log("DECREASE ME");
    this.setState({width: 200, height: 300})
  }
  render () {
    return <div className='gallery'>
      <img onClick={this.navigateToAlbum}
      className='imageGallery'
      src={this.props.albumInfo.url}
      alt='cat gallery'
      onMouseOver={this.increaseSize}
      onMouseOut={this.decreaseSize}
      height={this.state.height} width={this.state.width}/>
      <div className='descriptions'><h4>{this.props.albumInfo.name}</h4></div>
    </div>
  }
}
export default DirAlbumImageLink
