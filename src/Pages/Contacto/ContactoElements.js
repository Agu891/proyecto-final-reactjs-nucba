import styled from 'styled-components';

export const WrapperContacto = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  form {
    width: 70%;
    justify-self: flex-start;
    padding-top: 7%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  label {
    font-family: var(--fontfamily);
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  input {
    border: 1px solid grey;
    border-radius: 15px;
    width: 50%;
    padding: 15px;
    margin-bottom: 15px;
  }
  textarea {
    border: 1px solid grey;
    border-radius: 15px;
    width: 50%;
    padding: 15px;
    margin-bottom: 15px;
  }
  button {
    width: 50%;
    margin-left: 1.5%;
    padding: 25px;
  }

  @media screen and (max-width: 1023px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    form {
      margin-top: 15%;
      width: 100vw;
      margin-right: 0;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
    }
    input {
      width: 80%;
    }
    button {
      width: 90%;
    }
    textarea {
      width: 80%;
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
