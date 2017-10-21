import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from '../../core/provider/BooksAPI'

import Preloader from '../../components/Preloader'
import Title from '../../components/Title'
import Shelf from '../../components/Shelf'
import Search from '../../container/Search'

import './style.css'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      showloader: true
    }

    this.renderListBooks = this.renderListBooks.bind(this)
    this.changeBookShelf = this.changeBookShelf.bind(this)
  }

  componentDidMount() {
    this.renderListBooks()
  }

  changeBookShelf(book, shelf) {
    console.log('ID: ', book)
    console.log('Shelf: ', shelf.target.value)

    const newShelf = shelf.target.value
    this.setState({ showloader: true })

    BooksAPI.update(book, newShelf)
      .then(() => {
        this.renderListBooks()
      })
  }

  renderListBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        showloader: false,
        currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
        wantToRead: books.filter(book => book.shelf === 'wantToRead'),
        read: books.filter(book => book.shelf === 'read')
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
            <Preloader condition={this.state.showloader} />

            <Title text="MyReads" />

            <div className="list-books-content">
              <div>
                <Shelf
                  title="Currently Reading"
                  books={this.state.currentlyReading}
                  updateShelf={this.changeBookShelf}
                />
                <Shelf
                  title="Want to Read"
                  books={this.state.wantToRead}
                  updateShelf={this.changeBookShelf}
                />
                <Shelf
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

export default Main
