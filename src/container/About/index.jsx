import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledAbout = styled.div`
  padding: 30px;
  color: white;
  font-family: T4c, georgia, serif;
  line-height: 1;
  a {
    color: white;
    text-decoration: underline;
  }
`

const About = () => (
  <StyledAbout>
    <h1>Everton Denis</h1>
    <p>Frontend Developer</p>
    <p><a href="mailto:evertondenis@gmail.com">Get in touch</a> or find me on <a href="https://github.com/evertondenis">GitHub</a>, <a href="https://twitter.com/evertondenis">Twitter</a> and <a href="https://www.linkedin.com/in/evertondenis/">LinkedIn</a>.</p>
    <Link className='close-search' to='/'>Back</Link>
  </StyledAbout>
)

export default About
