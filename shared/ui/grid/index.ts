import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-gap: 66px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
  @media only screen and (max-width: 768px)  {
    grid-template-columns: 1fr;
    grid-gap: 33px;
  }  
`
