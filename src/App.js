import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './provider/BooksAPI'

import Title from './components/Title'
import BookShelf from './components/Shelf'
import Search from './container/Search'

import './App.css'

class BooksApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: []
    }

    this.changeBookShelf = this.changeBookShelf.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState({ currentlyReading: books.filter(book => book.shelf === 'currentlyReading') })
      this.setState({ wantToRead: books.filter(book => book.shelf === 'wantToRead') })
      this.setState({ read: books.filter(book => book.shelf === 'read') })
    })
  }

  changeBookShelf(book, shelf) {
    console.log('ID: ', book)
    console.log('Shelf: ', shelf.target.value)

    const newShelf = shelf.target.value

    BooksAPI.update(book, newShelf)
      .then(() => {
        BooksAPI.getAll().then((books) => {
          console.log(books)
          this.setState({ currentlyReading: books.filter(book => book.shelf === 'currentlyReading') })
          this.setState({ wantToRead: books.filter(book => book.shelf === 'wantToRead') })
          this.setState({ read: books.filter(book => book.shelf === 'read') })
        })
      })
  }


  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search updateShelf={this.changeBookShelf} />
        )}/>

        <Route exact path='/' render={() => (
          <div className="list-books">

            <Title text="MyReads" />

            <div className="list-books-content">
              <div>
                <BookShelf
                  title="Currently Reading"
                  books={this.state.currentlyReading}
                  updateShelf={this.changeBookShelf}
                />
                <BookShelf
                  title="Want to Read"
                  books={this.state.wantToRead}
                  updateShelf={this.changeBookShelf}
                />
                <BookShelf
                  title="Read"
                  books={this.state.read}
                  updateShelf={this.changeBookShelf}
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
