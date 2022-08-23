import styled from 'styled-components';

export const WrapperPortada = styled.div`
  height: 50vh;
  min-height: 350px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-top: 90px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  border-radius: 0px 0px 10px 10px;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    margin-top: 50px;
  }
  span {
    margin: 15px;
  }
  @media screen and (min-width: 769px) {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 175px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;

export const WrapperTitulo = styled.div`
  font-family: var(--fontfamily);
  z-index: 1;
  -webkit-backdrop-filter: brightness(50%);
  backdrop-filter: brightness(50%);
  height: 45vh;
  width: 100vw;
  max-width: 800px;
  max-height: 270px;
  span {
    text-transform: uppercase;
    color: aqua;
    padding: var(--margingral);
  }
`;

export const H2Portada = styled.h2`
  font-size: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  color: #fbfbfb;
  border-left: 3px solid aqua;
  padding-left: 5px;
  background-color: none;
  height: 70px;
`;
