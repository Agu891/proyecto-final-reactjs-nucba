import styled from 'styled-components';

export const WrapperContacto = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  div {
    margin-top: 25px;
    padding-left: 10px;
    grid-template-rows: 30px 50px 30px 50px 30px 50px 30px 250px 50px;
    gap: 15px;
    grid-template-columns: 300px;
  }
  form {
    width: 80%;
  }
  textarea {
    border: 1px solid grey;
    border-radius: 12px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    div {
      grid-template-rows: 30px 50px 30px 50px 30px 50px 30px 250px 50px;
      gap: 15px;
      grid-template-columns: 450px;
    }
    form {
      width: 80%;
    }
    textarea {
      border: 1px solid grey;
      border-radius: 12px;
    }
  }
`;

export const InputContacto = styled.input`
  border: 1px solid grey;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 15px;
`;

export const WrapperTextoContacto = styled.div`
  width: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: distribute;
  justify-content: space-around;

  p {
    font-family: var(--fontfamily);
    text-transform: uppercase;
  }
  h2 {
    font-size: 2rem;
    margin-left: 15px;
    padding-top: 10px;
  }
  span {
    margin-left: 15px;
    padding-top: 8px;

    font-family: var(--fontfamily);
  }
  @media screen and (max-width: 1023px) {
    width: 100vw;
  }
`;
