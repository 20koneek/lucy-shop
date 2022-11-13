import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-gap: 33px;
  grid-template: 
    "image size" auto
    "image description" 1fr 
    / 2fr 3fr;

  @media only screen and (max-width: 768px) {
    grid-template: 
        "image" auto
        "size" auto
        "description" auto
        / 1fr;
  }
`