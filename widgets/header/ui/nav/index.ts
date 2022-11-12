import styled from 'styled-components'

export const Nav = styled.nav`
  height: 63px;
  display: inline-flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  width: 100%;
  background-color: ${({ theme }) => theme.background.contrast};
`