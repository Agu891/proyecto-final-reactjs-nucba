/* eslint-disable no-undef */
/* eslint-disable no-mixed-operators */
import React, {
  useState,
  useContext,
  createContext,
  useCallback,
  useMemo,
} from 'react';

import { useNavigate } from 'react-router-dom';
import { useAxios } from '../context/AxiosContext';

const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: true,
  loading: false,
  error: null,
  login: (email, password) => {},
  logout: () => {},
  authCheckState: () => {},
};

const authContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const history = useNavigate();
  const axios = useAxios();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [error, setError] = useState(null);

  const logout = useCallback(() => {
    setCurrentUser(null);
    setLoading(false);
    setError(null);
    localStorage.removeItem('authData');
    localStorage.removeItem('expirationDate');
  }, []);

  const checkAuthTimeout = useCallback(
    (expirationTime) => {
      console.log('checkAuthTimeout ->', new Date(expirationTime));
      setTimeout(() => {
        logout();
        console.log('checkAuthTimeout -> Run Auto logout');
      }, expirationTime);
    },
    [logout]
  );

  const login = useCallback(
    async (email, password) => {
      setLoading(true);
      try {
        const response = await axios.post('/auth/login', {
          email: email,
          password: password,
        });
        const expirationDate = new Date(
          new Date().getTime() + response.data.result.expiresIn
        ).getTime();
        console.log('expirationDate', expirationDate);
        localStorage.setItem('authData', JSON.stringify(response.data));
        localStorage.setItem('expirationDate', expirationDate.toString());
        setCurrentUser(response.data.result.name);
        setLoading(false);
        setError(null);
        checkAuthTimeout(response.data.result.expiresIn);
        history('/');
      } catch (error) {
        setLoading(false);
        let newError = error.response.data.errors.flatMap(
          (item) => item.message
        );

        setError(newError);
        alert(newError);
      }
    },
    [checkAuthTimeout, history, axios]
  );

  const signin = useCallback(
    async (name, email, password) => {
      setLoading(true);
      try {
        const response = await axios.post('/auth/signin', {
          name: name,
          email: email,
          password: password,
          roleId: 2,
        });
        console.log(response.data);
        setLoading(false);
        setError(null);
        history('/login');
      } catch (error) {
        console.log(error);
        setLoading(false);
        let newError = error.response.data.errors.flatMap(
          (item) => item.message
        );

        setError(newError);
        alert(newError);
      }
    },
    [history, axios]
  );

  const authCheckState = useCallback(() => {
    const stringData = localStorage.getItem('authData');
    const authData = JSON.parse(String(stringData));
    console.log(authData);
    if (!authData) {
      logout();
    } else {
      const expirationDate = new Date(
        parseInt(localStorage.getItem('expirationDate'))
      );
      if (expirationDate > new Date()) {
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        );
        setCurrentUser(authData);
      } else {
        logout();
      }
    }
  }, [logout, checkAuthTimeout]);

  return useMemo(() => {
    return {
      currentUser,
      loading,
      hiddenMenu,
      error,
      login,
      logout,
      signin,
      authCheckState,
    };
  }, [
    currentUser,
    loading,
    hiddenMenu,
    error,
    login,
    logout,
    signin,
    authCheckState,
  ]);
}
