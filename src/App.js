import React, { Component } from 'react'
import './main.css'
import albumsInfo from './albums.json'
import DirectoryOfAlbums from './DirectoryOfAlbums'
import Footer from './Footer'
import Album from './Album'
import SinglePhotoView from './SinglePhotoView'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'album',
      albums: albumsInfo.album,
      currentAlbum: albumsInfo.album[1]
    }
  }

  navigateTo = (newScreen, album) => {
  this.setState({
    currentScreen: newScreen,
    currentAlbum: album
  })
}
render () {
      let screen
      switch(this.state.currentScreen) {
        case 'dir': screen = <DirectoryOfAlbums navigate={this.navigateTo} albums={this.state.albums} />
          break;
        case 'album': screen = <Album navigate={this.navigateTo} albums={this.state.albums} currentAlbum={this.state.currentAlbum} />
          break;
        case 'photo': screen = <SinglePhotoView navigate={this.navigateTo} currentAlbum={this.state.currentAlbum} />
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
