import styled from 'styled-components';

export const NavBarSimple = styled.nav`
  background-color: #212121;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  min-height: 80px;
  position: relative;
`;

export const Logo = styled.div`
  display: block;
  text-align: center;
  color: white;
  font-family: var(--fontfamilyH1);
  font-size: 2rem;
  position: relative;
  z-index: 5;
  text-decoration: none;
  a {
    text-decoration: none;
    color: white;
  }
`;
