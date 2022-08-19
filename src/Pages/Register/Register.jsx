import React from 'react';
import useForm from '../../hooks/useForm';
import Input from '../../components/input/Input';
import HeaderSimple from '../../components/HeaderSimple/HeaderSimple';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import './register.css';
import { useSelector } from 'react-redux';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../utils/validators';
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

  const handlerSubmit = async (event) => {
    event.preventDefault();

    if (!formState.isValid) {
      alert('Faltan datos por  completar');
    } else {
      try {
        const { user } = auth.createUserWithEmailAndPassword(
          formState.inputs.email.value,
          formState.inputs.password.value
        );

        await createUserProfileDocument(user, {
          displayName: formState.inputs.displayName.value,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <HeaderSimple />
      <form onSubmit={handlerSubmit}>
        <div className="boxgral">
          <p>
            Inicio <FontAwesomeIcon icon={faAngleRight} /> MiCuenta
            <FontAwesomeIcon icon={faAngleRight} /> Crear cuenta
          </p>
          <h2>Crear cuenta</h2>

          <div className="boxes-input">
            <Input
              element="input"
              id="nombre"
              label="Nombre"
              type="text"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Campo Obligatorio"
              placeholder="ej:. Juan"
            />
          </div>

          <div className="boxes-input">
            <Input
              element="input"
              id="apellido"
              label="Apellido"
              type="text"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Campo Obligatorio"
              placeholder="ej:. Rodriguez"
            />
          </div>

          <div className="boxes-input">
            <Input
              element="input"
              id="email"
              label="Email"
              type="email"
              onInput={inputHandler}
              validators={[VALIDATOR_EMAIL()]}
              errorText="Ingresa un email"
              placeholder="ej:. JuanR@mail.com"
            />
          </div>

          <div className="boxes-input">
            <Input
              element="input"
              id="displayName"
              label="Usuario"
              type="text"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Campo Obligatorio"
              placeholder="ej:. Juan891"
            />
          </div>
          <div className="boxes-input">
            <Input
              element="input"
              id="password"
              label="Contraseña"
              type="password"
              onInput={inputHandler}
              validators={[VALIDATOR_MINLENGTH(8)]}
              errorText="Minimo 8 caracteres"
            />
          </div>

          {formState.isValid ? (
            <button className="validBtn">Registrarse</button>
          ) : (
            <button className="invalidBtn" disabled={true}>
              Registrarse
            </button>
          )}
          <Link to="/login">
            <p>¿Ya tenes una cuenta? INICIÁ SESIÓN</p>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Register;
