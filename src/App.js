import React, { Component } from 'react'
import albumsInfo from './albums.json'
import DirectoryOfAlbums from './DirectoryOfAlbums'
import Footer from './Footer'
import Album from './Album'
import SinglePhotoView from './SinglePhotoView'
import './main.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'dir',
      albums: albumsInfo.album,
      currentAlbum: albumsInfo.album[1],
      currentImage: './baby.png'
    }
  }
  navigateTo = (newScreen, album) => {
    this.setState({
      currentScreen: newScreen,
      currentAlbum: album
    })
  }
  navigateToImage = (newScreen, image) => {
    this.setState({
      currentScreen: newScreen,
      currentImage: image
    })
  }
  render () {
    let screen
    switch(this.state.currentScreen) {
      case 'dir': screen = <DirectoryOfAlbums navigate={this.navigateTo} albums={this.state.albums} />
        break;
      case 'album': screen = <Album navigate={this.navigateTo} navigateImage={this.navigateToImage} albums={this.state.albums} currentAlbum={this.state.currentAlbum} />
        break;
      case 'photo': screen = <SinglePhotoView navigate={this.navigateTo} navigateImage={this.navigateToImage} currentAlbum={this.state.currentAlbum} currentImage={this.state.currentImage} />
        break;
      default: screen = <DirectoryOfAlbums navigate={this.navigateTo} albums={this.state.albums} />
    }
    return <div className="App">
        <main>
          {screen}
        </main>
        <Footer />
      </div>
  }
}
export default App
