import styled from 'styled-components';

export const Seccion1Wrapper = styled.section`
  padding-top: 15px;
  padding-left: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  @media screen and (min-width: 769px) {
    margin-left: 175px;
  }
`;

export const WrapperGralSeccion2 = styled.div`
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  gap: 25px;
  @media screen and (min-width: 769px) {
    justify-content: center;
  }
`;

export const BoxImgs = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  scroll-snap-align: start;
  border-radius: 10px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: 350%;
  min-width: 200px;
  width: 250px;
  height: 250px;
  -webkit-transition: 500ms;
  transition: 500ms;
  cursor: pointer;
  h2 {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: white;
    text-align: start;
    font-weight: 600;
    padding: 5px;
    margin-bottom: 15px;
    font-family: 'Courier New', Courier, monospace;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }
  p {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    font-size: 0.9rem;
    color: white;
    text-align: start;
    font-weight: 400;
    -webkit-backdrop-filter: brightness(30%);
    backdrop-filter: brightness(30%);
  }

  &:hover {
    background-size: 400%;
  }
`;
