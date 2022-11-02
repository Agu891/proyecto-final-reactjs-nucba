import React, { useState } from 'react';

import HeaderSimple from '../../components/HeaderSimple/HeaderSimple';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Spinner } from '@chakra-ui/react';

import { useAuth } from '../../context/AuthContext';

import {
  FormWrapper,
  WrapperGral,
  WrapperTexto,
  ValidBtn,
} from '../Register/RegisterElements';
import Footer from '../../components/Footer/Footer';
const Register = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [name, setName] = useState('');
  const { signin, loading } = useAuth('');

  return (
    <>
      <HeaderSimple />
      <FormWrapper>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingrese su nombre"
            />

            <label for="email">Email</label>
            <Input
              element="input"
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su email"
            />

            <label for="password">Password</label>
            <Input
              element="input"
              id="password"
              label="Contraseña"
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />

            <ValidBtn
              onClick={(e) => [e.preventDefault(), signin(name, email, pwd)]}
            >
              {loading ? <Spinner /> : 'Registrarse'}
            </ValidBtn>

            <Link to="/login">
              <p>¿Ya tenes una cuenta? INICIÁ SESIÓN</p>
            </Link>
          </WrapperTexto>
        </WrapperGral>
      </FormWrapper>
      <Footer margin="300px" />
    </>
  );
};

export default Register;
