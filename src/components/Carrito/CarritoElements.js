import styled from 'styled-components';

export const WrapperCarrito = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0px;
  top: 10%;
  height: calc(100% - 93px);
  width: 100vw;
  max-width: 400px;
  background-color: aliceblue;
  z-index: 4;
  box-shadow: 2px 2px 2px 3px gray;
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(100%)`)};
  transition-property: transform;
  transition-duration: 0.5s;
  z-index: 990;
  p {
    text-align: center;
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 55px 15px 12px 15px 120px 95px;
  justify-content: space-between;
  align-items: center;
  font-family: var(--fontfamily);
  font-weight: 500;
  font-size: 0.8rem;
  p {
    padding-left: 1px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ItemsImg = styled.img`
  width: 120px;
`;

export const TotalPrice = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 0px;
  font-family: var(--fontfamily);
  border-radius: 5px;
  background-color: whitesmoke;
  border: 2px solid grey;
`;

export const FinalizarBtn = styled.button`
  width: 100%;
  font-family: var(--fontfamily);
  border: none;
  background-color: blue;
  font-weight: 600;
  color: white;
  border-radius: 2px;
  padding: 2vh;
  -ms-flex-item-align: center;
  align-self: center;
  transition: 200ms;
  cursor: pointer;
  transform: scale(1);
`;
