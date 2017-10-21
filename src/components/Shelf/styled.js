import styled from 'styled-components'

export const StyledShelf = styled.div`
  padding: 0 10px 20px;

  .bookshelf-title {
    text-align: right;
    color: white;
    border-bottom: 1px solid white;
  }

  .bookshelf-books {
    text-align: center;
  }

  .books-grid {
    list-style-type: none;
    padding: 0;
    margin: 0;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    li {
      padding: 10px 15px;
      text-align: left;
    }
  }

  @media (min-width: 600px) {
    padding: 0 20px 40px;
  }
`
