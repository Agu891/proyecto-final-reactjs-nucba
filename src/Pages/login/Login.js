import React from 'react';

import useForm from '../../hooks/useForm';
import Input from '../../components/input/Input';
import HeaderSimple from '../../components/HeaderSimple/HeaderSimple';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../utils/validators';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import googleIcon from './google.png';
import {
  FormWrapper,
  InvalidBtn,
  ValidBtn,
  WrapperGral,
  WrapperTexto,
} from './LoginElements';
const Login = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  if (currentUser) {
    navigate('/');
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    if (formState.isValid) {
      await auth.signInWithEmailAndPassword(
        formState.inputs.email.value,
        formState.inputs.password.value
      );
    }
  };

  return (
    <>
      <HeaderSimple />
      <FormWrapper onSubmit={submitHandler} id="form">
        <WrapperGral>
          <p>
            Inicio <FontAwesomeIcon icon={faAngleRight} /> MiCuenta
            <FontAwesomeIcon icon={faAngleRight} /> Login
          </p>
          <WrapperTexto justify="space-evenly">
            <h2>Iniciar Sesión</h2>

            <Input
              element="input"
              id="email"
              label="Email"
              type="email"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Campo Obligatorio"
              placeholder="ej:. Juan@mail.com"
            />
            <Input
              element="input"
              id="password"
              label="Contraseña"
              type="password"
              onInput={inputHandler}
              validators={[VALIDATOR_MINLENGTH(8)]}
              errorText="Minimo 8 caracteres"
            />
            <p>¿Olvido su contraseña?</p>
            <Link to="/register">
              <p> ¿No tenes cuenta? Registrate</p>
            </Link>

            {formState.isValid ? (
              <ValidBtn>Iniciar Sesión</ValidBtn>
            ) : (
              <InvalidBtn disabled={true}>Iniciar Sesión</InvalidBtn>
            )}
          </WrapperTexto>
        </WrapperGral>
      </FormWrapper>
      <Footer margin="2%" />
    </>
  );
};

export default Login;
