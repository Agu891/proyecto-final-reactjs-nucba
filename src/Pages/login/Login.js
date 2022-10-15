import React, { useState } from 'react';
import { Input, Spinner } from '@chakra-ui/react';
import HeaderSimple from '../../components/HeaderSimple/HeaderSimple';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { useAuth } from '../../context/AuthContext';
import {
  FormWrapper,
  ValidBtn,
  WrapperGral,
  WrapperTexto,
} from './LoginElements';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser, loading, login } = useAuth();
  //Aca tengo el problema con el Login lo intento usar en  el boton de mas abajo pero la peticion a la api no llega
  const navigate = useNavigate();

  if (currentUser) {
    navigate('/');
  }
  return (
    <>
      <HeaderSimple />
      <FormWrapper id="form">
        <WrapperGral>
          <p>
            Inicio <FontAwesomeIcon icon={faAngleRight} /> MiCuenta
            <FontAwesomeIcon icon={faAngleRight} /> Login
          </p>
          <WrapperTexto justify="center">
            <h2>Iniciar Sesión</h2>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              placeholder="Ingrese  su email"
              type="email"
              minH="55px"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Contraseña</label>
            <Input
              minH="55px"
              id="password"
              placeholder="ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />

            <p>¿Olvido su contraseña?</p>
            <Link to="/register">
              <p> ¿No tenes cuenta? Registrate</p>
            </Link>

            <ValidBtn onClick={() => login(email, password)}>
              {loading ? <Spinner /> : 'Ingresar'}
            </ValidBtn>
          </WrapperTexto>
        </WrapperGral>
      </FormWrapper>
      <Footer margin="2%" />
    </>
  );
};

export default Login;
