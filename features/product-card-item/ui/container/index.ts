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
    "image ." 1fr 
    "image action" auto 
    / 1fr 4fr;

  @media only screen and (max-width: 768px) {
    grid-template: 
        "image" auto
        "header" auto
        "size" auto
        "price" auto
        "count" auto
        "action" auto 
        / 1fr;
  }
`