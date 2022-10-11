import React, { useState } from 'react';

import useForm from '../../hooks/useForm';
import Input from '../../components/input/Input';
import HeaderSimple from '../../components/HeaderSimple/HeaderSimple';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../utils/validators';

import Footer from '../../components/Footer/Footer';

import {
  FormWrapper,
  InvalidBtn,
  ValidBtn,
  WrapperGral,
  WrapperTexto,
} from './LoginElements';
import { useMutation } from '@tanstack/react-query';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useMutation(
    async (email, password) => {
      await new Promise((resolve) => setTimeout(resolve, 400));
      return fetch('https://api-pc-geeks.herokuapp.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });
    },
    { onSuccess: () => console.log('login succesful') },
    { onError: () => console.log('login failure') }
  );

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

  return (
    <>
      <HeaderSimple />
      <FormWrapper id="form">
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
              onChange={(e) => setEmail(e.target.value)}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Campo Obligatorio"
              placeholder="ej:. Juan@mail.com"
            />
            <Input
              element="input"
              id="password"
              label="Contraseña"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              validators={[VALIDATOR_MINLENGTH(8)]}
              errorText="Minimo 8 caracteres"
            />
            <p>¿Olvido su contraseña?</p>
            <Link to="/register">
              <p> ¿No tenes cuenta? Registrate</p>
            </Link>

            {formState.isValid ? (
              <ValidBtn
                onClick={() =>
                  mutation.mutate({ email: email, password: password })
                }
              >
                Iniciar Sesión
              </ValidBtn>
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
