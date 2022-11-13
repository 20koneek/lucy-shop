import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-gap: 33px;
  grid-template: 
    "image info" auto
    "image form" auto
    "image description" 1fr 
    / 2fr 3fr;

  @media only screen and (max-width: 768px) {
    grid-template: 
        "image" auto
        "info" auto
        "form" auto
        "description" auto
        / 1fr;
  }
`