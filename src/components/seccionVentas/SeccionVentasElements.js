import styled from 'styled-components';

export const SeccionVentasWrapper = styled.section`
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 350px;
  background-color: white;
  border-radius: 15px 0 0 0;
  padding-left: 2%;
  margin: 20px 0 20px 0;
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  @media screen and (min-width: 769px) {
    margin-left: 175px;
  }
`;

export const WrapperProductos = styled.div`
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  gap: 25px;
`;
export const CardWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-width: 250px;
  min-height: 200px;
  border-radius: 5px;
  scroll-snap-align: start;
  margin: 10px;
  max-width: 400px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  width: 70%;
`;

export const TextWrapper = styled.div`
  padding-left: 5px;
  margin-right: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: grid;
  grid-template-rows: 60px 40px 40px;
  gap: 5px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  font-family: var(--fontfamily);
  text-align: center;
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  p {
    font-size: 1.5rem;
  }
  b {
    color: blue;
  }
`;
export const BtnAzul = styled.button`
  border: none;
  background-color: blue;
  color: white;
  padding: 5px;
  font-size: 0.8rem;
  font-family: var(--fontfamily1);
  font-weight: 500;
  border-radius: 3px;
  -webkit-transition: 200ms;
  transition: 200ms;
  cursor: pointer;
  margin-top: 5px;
  &:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`;
