import React from 'react';
import useForm from '../../hooks/useForm';

import HeaderSimple from '../../components/HeaderSimple/HeaderSimple';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Spinner } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../utils/validators';
import {
  FormWrapper,
  InvalidBtn,
  ValidBtn,
  WrapperGral,
  WrapperTexto,
} from '../login/LoginElements';
import Footer from '../../components/Footer/Footer';
const Register = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const [formState, inputHandler] = useForm(
    {
      nombre: {
        value: '',
        isValid: false,
      },
      apellido: {
        value: '',
        isValid: false,
      },
      email: {
        value: '',
        isValid: false,
      },
      displayName: {
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

  return (
    <>
      <HeaderSimple />
      <FormWrapper onSubmit={() => console.log('ARMAR SUBMIT REGISTER')}>
        <WrapperGral>
          <p>
            Inicio <FontAwesomeIcon icon={faAngleRight} /> MiCuenta
            <FontAwesomeIcon icon={faAngleRight} /> Crear cuenta
          </p>
          <h2>Crear cuenta</h2>

          <WrapperTexto justify="center">
            <label for="nombre">Nombre</label>
            <Input
              element="input"
              id="nombre"
              label="Nombre"
              type="text"
              placeholder="ej:. Juan"
            />
          </WrapperTexto>

          <WrapperTexto justify="center">
            <label for="email">Email</label>
            <Input
              element="input"
              id="email"
              label="Email"
              type="email"
              onInput={inputHandler}
              placeholder="ej:. JuanR@mail.com"
            />
          </WrapperTexto>

          <WrapperTexto justify="center">
            <label for="password">Password</label>
            <Input
              element="input"
              id="password"
              label="Contraseña"
              type="password"
              onInput={inputHandler}
            />
          </WrapperTexto>

          <ValidBtn>Registrarse</ValidBtn>

          <Link to="/login">
            <p>¿Ya tenes una cuenta? INICIÁ SESIÓN</p>
          </Link>
        </WrapperGral>
      </FormWrapper>
      <Footer margin="300px" />
    </>
  );
};

export default Register;
