import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from '../../core/provider/BooksAPI'
import { Shelfs } from '../../core/constants/shelfs';

import Preloader from '../../components/Preloader'
import Title from '../../components/Title'
import Shelf from '../../components/Shelf'
import Search from '../../container/Search'
import About from '../../container/About'

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

    this.renderShelfs = this.renderShelfs.bind(this)
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
      this.setState({ books, showloader: false })
    })
  }

  renderShelfs() {
    const listShelf = Shelfs.reduce((acc, shelf) => {
      const type = (Object.keys(shelf)).join()

      acc[type] = this.state.books.filter((item, index) => item.shelf === type)
      return acc
    }, [])

    return Shelfs.map((shelf, index) => (
      <Shelf
        key={Object.keys(shelf)}
        title={shelf[(Object.keys(shelf)).toString()]}
        books={listShelf[(Object.keys(shelf))]}
        updateShelf={this.changeBookShelf}
      />
    ))
  }

  render() {
    return (
      <div className="app">

        <Route path='/search' render={() => (
          <Search loader={this.state.showloader} updateShelf={this.changeBookShelf} />
        )}/>

        <Route exact path='/' render={() => (
          <div className="list-books">

            <Preloader condition={this.state.showloader} />


            <Title text="MyReads" />

            <div className="list-books-content">
              <div>
                {this.renderShelfs()}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>

            <Link to='/about'>About</Link>
          </div>
        )}/>

        <Route path='/about' component={About}/>
      </div>
    )
  }
}

export default Main
