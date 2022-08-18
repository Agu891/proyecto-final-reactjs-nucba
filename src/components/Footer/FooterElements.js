import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(250px, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  -ms-grid-rows: 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  width: 100%;
  align-items: center;
  padding-top: 15px;
  background-color: white;
`;
export const LinkWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Astyled = styled.a`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-decoration: none;
  color: black;
  padding-left: 25px;
  padding-top: 25px;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-family: var(--fontfamily);
`;

export const InputStyled = styled.input`
  border: 1px solid grey;
  border-radius: 15px;
  padding: 15px;
  width: 70%;
  margin: 10px;
  font-family: var(--fontfamily);
`;

export const Redes = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(150px, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  -ms-grid-rows: 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  width: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 15px;
  background-color: white;
`;

export const ListaContacto = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  padding-left: 15px;
  margin-top: 10px;
  text-align: flex-start;
`;
export const Derechos = styled.p`
  text-align: center;
  background-color: white;
  padding-top: 15px;
`;
