import styled from 'styled-components'

export const StyledPreloader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.2);
  z-index: 9998;

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28px;
    height: 28px;
    margin: 0 0 0 -14px;
  }
`
