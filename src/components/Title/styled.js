import styled from 'styled-components'

export const StyledTitle = styled.div`
  padding: 10px 0;
  background: black;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  h1 {
    display: inline;
    font-weight: 400;
    margin: 0;
    color: white;

    .white { color: white; }
    .yellow { color: yellow; }
  }

  .btn-about {
    position: absolute;
    right: 0;
    padding: 10px;
    border-radius: 5px 0 0 5px;
    background-color: tomato;
    font-size: 0.8em;
    color: black;
    text-decoration: none;
    transition: all 0.2s ease-out;

    :hover {
      background-color: yellow;
      transition: all 0.2s ease-out;
    }
  }
`
