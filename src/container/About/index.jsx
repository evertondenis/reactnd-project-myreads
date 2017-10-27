import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrowback from './assets/arrow-back.svg'

const StyledAbout = styled.div`
  padding: 30px;
  color: white;
  font-size: 1.1em;
  font-family: T4c, georgia, serif;
  font-weight: bold;
  line-height: 1;

  .my-name { display: inline; color: yellow }

  a {
    color: yellow;
    text-decoration: underline;

    :hover { text-decoration: none; }
  }

  .btn-back {
    display: block;
    width: 25px;
    height: 53px;
    background-image: url('${arrowback}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 28px;
    font-size: 0;
  }
`

const About = () => (
  <StyledAbout>
    <p>Hi! my name is <span className="my-name">Everton Denis</span>.</p>
    <p>I'm a Frontend Developer, or Web Developer, or Fullstack Developer...whatever...</p>
    <p>the important is; My passion is to dev solutions for complex problems!</p>
    <p><a href="mailto:evertondenis@gmail.com">Get in touch</a> or find me on <a href="https://github.com/evertondenis">GitHub</a>, <a href="https://twitter.com/evertondenis">Twitter</a> and <a href="https://www.linkedin.com/in/evertondenis/">LinkedIn</a>.</p>
    <Link className='btn-back' to='/'>Back</Link>
  </StyledAbout>
)

export default About
