import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
`;

export const WrapperGral = styled.div`
  display: flex;
  width: 100vw;
  height: 80vh;
  flex-direction: column;
  margin-left: 15px;
  max-width: 500px;
  min-height: 400px;
  border-radius: 15px 0 0 0;
  position: relative;
  background-color: white;
  p {
    text-transform: uppercase;
  }
  h2 {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 8%;
    font-size: 2em;
  }
  a {
    text-decoration: none;
    color: black;
    margin-top: 15px;
    font-weight: 500;
  }
`;

export const WrapperTexto = styled.div`
  display: grid;
  grid-template-rows: 40px 20px 50px 20px 50px 10px 10px 50px;
  grid-template-columns: 300px;

  gap: 25px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 769px) {
    grid-template-rows: 150px;
    grid-template-columns: 450px;
  }
  label {
    align-self: flex-start;
  }
  input {
    border: 1px solid grey;
    padding: 15px;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin-bottom: 50px;
  }
  p {
    align-self: flex-start;

    margin: 0px;
    font-size: 0.8rem;
  }
  a {
    text-align: left;
    font-size: 1rem;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`;

export const ValidBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  width: 80%;
  align-self: center;
  justify-self: center;
  height: 8%;
  max-height: 70px;
  border-radius: 15px;
  border: none;
  margin-top: 5px;
  transition-duration: 0.3s;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 20px;
  transition-duration: 500ms;
  margin: 5px 18px 2px 18px;
  background: rgb(2, 210, 231);
  background: linear-gradient(
    167deg,
    rgba(2, 210, 231, 1) 23%,
    rgba(0, 129, 255, 1) 55%
  );
`;

export const InvalidBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 8%;
  border-radius: 15px;
  border: none;
  font-weight: 500;
  margin: 5px 18px 2px 18px;
  transition-duration: 0.3s;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 20px;
  transition-duration: 500ms;
  background-color: grey;
`;
