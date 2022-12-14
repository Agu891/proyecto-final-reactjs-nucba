import styled, { keyframes } from 'styled-components';

export const NavBarPrincipal = styled.nav`
  background-color: #303030;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 10vh;
  width: 100%;
  min-height: 80px;
  position: fixed;
  z-index: 2;
  a {
    text-decoration: none;
  }
  @media screen and (min-width: 769px) {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
`;

export const MenuToggle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  margin-bottom: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 2;
  width: 8%;
  height: 5%;
  ul li a {
    color: white;
    -webkit-transition: color 0.3s ease;
    transition: color 0.3s ease;
    font-family: var(--fontfamily);
  }
  ul li {
    width: 150px;
  }
  span:first-child {
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
  }
  span:nth-last-child(2) {
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }
  @media screen and (min-width: 769px) {
    width: 168px;
    padding-top: 250px;
  }
`;

export const InputMenu = styled.input`
  display: block;
  width: 40px;
  height: 5vh;
  position: absolute;
  left: -12px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
  :checked ~ ul {
    -webkit-transform: none;
    transform: none;
  }
  :checked ~ span {
    opacity: 1;
    -webkit-transform: rotate(45deg) translate(-10px, -4px);
    transform: rotate(45deg) translate(-10px, -4px);
    background: #ffffff;
    z-index: 2;
  }
  :checked ~ span:nth-last-child(3) {
    opacity: 0;
    -webkit-transform: rotate(0deg) scale(0.2, 0.2);
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  :checked ~ span:nth-last-child(2) {
    -webkit-transform: rotate(-45deg) translate(0, -1px);
    transform: rotate(-45deg) translate(0, -1px);
  }
`;

export const BurguerSpan = styled.span`
  display: block;
  width: 40px;
  height: 3px;
  margin-top: ${(props) => props.margin};
  margin-left: -50%;
  position: absolute;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  -webkit-transform-origin: 4px 4px;
  transform-origin: 4px 4px;
  -webkit-transition: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease,
    -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transition: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease,
    -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease,
    -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 55px;
  padding: 450px 100px 0px 100px;
  background-color: #303030;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  -webkit-transform-origin: 0% 0%;
  transform-origin: 0% 0%;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-105%, 0);
  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  z-index: 1;

  li {
    display: flex;
    padding-left: 5px;
    padding-top: 15px;
    font-size: 1rem;
    color: white;
    font-family: var(--fontfamily);
    font-weight: 600;
    position: relative;
    width: 100%;
    display: flex;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-bottom: 15px;
    
  }

  @media screen and (min-width: 769px) {
    -webkit-transform: none;
    transform: none;
    position: fixed;
    padding-bottom: 620px;
    margin-bottom: 97px;
    margin-top: 350px;G
    -webkit-transform-origin: none;
    transform-origin: none;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    margin-left: -70px;
  }
`;

export const LogoQuery = styled.h1`
  display: none;
  @media screen and (min-width: 769px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: white;
    margin-bottom: 80%;
    padding-top: 100%;

    font-size: 1.5rem;
  }
`;
export const UserNameContainer = styled.li`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const animation = keyframes`
 from {
      -moz-transform: translateX(90%);
      -webkit-transform: translateX(90%);
      transform: translateX(90%);
    }
    to {
      -moz-transform: translateX(-50%);
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
`;
export const UserName = styled.p`
  -moz-transform: translateX(90%);
  -webkit-transform: translateX(90%);
  transform: translateX(90%);
  width: 200px;
  -moz-animation: ${animation}8s linear infinite;
  -webkit-animation: ${animation} 8s linear infinite;
  animation: ${animation} 8s linear infinite;
`;

export const Componentes = styled.li`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  ul {
    width: 150px;
    height: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transition: 200ms;
    transition: 200ms;
    -webkit-transform-origin: top;
    transform-origin: top;
    z-index: 2;
    margin-bottom: 33px;
    padding-left: 15px;
    background-color: #cdcdcd;
  }
  ul li {
    background-color: #303030;
    position: inherit;
    list-style-type: none;
    font-size: 0.7rem;
    margin: 0px;
    display: flex;
    max-width: 100px;
  }
  #flechita {
    margin-left: 5px;
    -webkit-transition: 200ms;
    transition: 200ms;
  }
`;

export const CheckboxComponentes = styled.input`
  width: 150px;
  color: white;
  z-index: 1;
  position: absolute;
  opacity: 0;
  cursor: pointer;

  :checked ~ #flechita {
    -webkit-transform: rotate(90deg) translate(0px, -5px);
    transform: rotate(90deg) translate(0px, -5px);
  }

  :checked ~ ul {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
`;

export const Logo = styled.div`
  h1 {
    display: block;
    text-align: center;
    color: white;
    font-family: var(--fontfamilyH1);
    font-size: 1.5rem;
    position: relative;
    z-index: 5;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const Carrito = styled.div`
  cursor: pointer;
  @media screen and (min-width: 769px) {
    padding-right: 30px;
  }
  span {
    background-color: red;
    color: white;
    font-weight: 600;
    text-align: center;
    border-radius: 10px;
    width: 20px;
    text-align: center;
    font-size: 0.9rem;
    position: absolute;
    z-index: 2;
    margin-left: 1px;
    padding-bottom: 1px;
  }
  i {
    color: white;
  }
`;
