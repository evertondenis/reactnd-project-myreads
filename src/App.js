import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './provider/BooksAPI'

import Search from './components/Search'
import Title from './components/Title'
import BookShelf from './components/BookShelf'

import './App.css'

class BooksApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  componentDidMount() {

    BooksAPI.getAll().then((books) => {
      this.setState({ currentlyReading: books.filter(book => book.shelf === 'currentlyReading') })
      this.setState({ wantToRead: books.filter(book => book.shelf === 'wantToRead') })
      this.setState({ read: books.filter(book => book.shelf === 'read') })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' component={Search}/>

        <Route exact path='/' render={() => (
          <div className="list-books">

            <Title text="MyReads" />

            <div className="list-books-content">
              <div>
                <BookShelf
                  title="Currently Reading"
                  books={this.state.currentlyReading}
                />
                <BookShelf
                  title="Want to Read"
                  books={this.state.wantToRead}
                />
                <BookShelf
                  title="Read"
                  books={this.state.read}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
