import React from 'react';
import './login.css';
import useForm from '../../hooks/useForm';
import Input from '../../components/input/Input';
import HeaderSimple from '../../components/HeaderSimple/HeaderSimple';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../utils/validators';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import { useSelector } from 'react-redux';

import googleIcon from './google.png';
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
      <form onSubmit={submitHandler} id="form">
        <div className="boxgral">
          <p>
            Inicio <FontAwesomeIcon icon={faAngleRight} /> MiCuenta
            <FontAwesomeIcon icon={faAngleRight} /> Login
          </p>
          <div className="boxtexto">
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
              <button className="validBtn">Iniciar Sesión</button>
            ) : (
              <button className="invalidBtn" disabled={true}>
                Iniciar Sesión
              </button>
            )}
            <button onClick={signInWithGoogle} className="validBtn">
              <img src={googleIcon} alt="icono google" />
              Iniciar Sesión con Google
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
