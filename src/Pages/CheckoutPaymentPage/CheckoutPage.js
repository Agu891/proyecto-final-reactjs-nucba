import React from 'react';
import Footer from '../../components/Footer/Footer';
import HeaderSimple from '../../components/HeaderSimple/HeaderSimple';
import { VALIDATOR_REQUIRE } from '../../utils/validators';
import {
  FormWrapper,
  InvalidBtn,
  ValidBtn,
  WrapperGral,
  WrapperTexto,
} from '../login/LoginElements';
import useForm from '../../hooks/useForm';
import Input from '../../components/input/Input';

const CheckoutPage = () => {
  const [formState, inputHandler] = useForm(
    {
      direccion: {
        value: '',
        isValid: false,
      },
      localidad: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  return (
    <>
      <HeaderSimple />
      <FormWrapper>
        <WrapperGral>
          <WrapperTexto justify="space-evenly">
            <h2>Completa estos datos para finalizar la compra</h2>

            <Input
              element="input"
              id="direccion"
              label="Dirección"
              type="text"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Campo Obligatorio"
              placeholder="ej:. Juan Alberdi 1234"
            />
            <Input
              element="input"
              id="localidad"
              label="Localidad"
              type="text"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Campo Obligatorio"
              placeholder="ej:. La Plata"
            />

            {formState.isValid ? (
              <ValidBtn>Proceder al pago </ValidBtn>
            ) : (
              <InvalidBtn disabled={true}>Proceder al pago</InvalidBtn>
            )}
          </WrapperTexto>
        </WrapperGral>
      </FormWrapper>
      <Footer />
    </>
  );
};

export default CheckoutPage;
