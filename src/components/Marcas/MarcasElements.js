import styled from 'styled-components';

export const BoxLogos = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (min-width: 769px) {
    margin-left: 175px;
    flex-direction: row;
  }
`;

export const ImgMarcasWrapper = styled.div`
  @media screen and (min-width: 769px) {
    margin-left: 175px;
    flex-direction: row;
  }
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(120px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  -ms-grid-rows: 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  width: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 15px;
  img {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100vw;
    align-self: center;
    max-width: 125px;
  }
  #logoNvidia {
    padding-left: 17px;
  }
`;
