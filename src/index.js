<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container')
)
=======
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/searchBar'
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/videoDetail'
import VideoList from './components/videoList'
import _ from 'lodash'

const API_KEY = 'AIzaSyCi7NOO1Tko2Aymdo5ZXInsDcX7f5JsV2g'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('kobe')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term)
    }, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
>>>>>>> master
