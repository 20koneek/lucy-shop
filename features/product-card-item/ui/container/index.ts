import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  column-gap: 33px;
  row-gap: 8px;
  grid-template: 
    "image header" auto
    "image size" auto
    "image price" auto
    "image count" auto
    "image description" 1fr 
    / 1fr 4fr;

  @media only screen and (max-width: 768px) {
    grid-template: 
        "image" auto
        "info" auto
        "form" auto
        "description" auto
        / 1fr;
  }
`