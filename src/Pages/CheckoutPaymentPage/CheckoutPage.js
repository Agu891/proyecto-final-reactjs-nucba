import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import HeaderSimple from '../../components/HeaderSimple/HeaderSimple';
import * as cartActions from '../../redux/cart/cart-actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { useCreateOrder } from '../../hooks/useCategories';
import {
  FormWrapper,
  ValidBtn,
  WrapperGral,
  WrapperTexto,
} from '../login/LoginElements';

const CheckoutPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(cartActions.clearCart());
  };
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const { createOrder, initpoint } = useCreateOrder();

  const dataLogin = JSON.parse(localStorage.getItem('authData'));

  const cartItems = useSelector((state) => state.cart.cartItems);
  const item = cartItems.map((product) => {
    return {
      title: product.name,
      quantity: product.quantity,
      unitPrice: product.price,
      productsId: product.id,
    };
  });
  const itemReduce = item.flatMap((product) => `- ${product.title}  `);

  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="ej:. Juan Alberdi 1234"
            />
            <Input
              element="input"
              id="localidad"
              label="Localidad"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="ej:. La Plata"
            />
            {}
            <ValidBtn
              onClick={(e) => [
                e.preventDefault(),
                onOpen(),
                createOrder(
                  dataLogin.result.userId,
                  address,
                  location,
                  item,
                  subTotal
                ),
              ]}
            >
              Proceder al pago
            </ValidBtn>
          </WrapperTexto>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontSize="5xl">
                Verifica bien los datos antes de proceder
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontSize="3xl">Dirección: {address}</Text>
                <Text fontSize="3xl">Localidad: {location}</Text>
                <Text fontSize="2xl">Productos: {itemReduce}</Text>
                <Text fontSize="3xl">Subtotal: ${subTotal}</Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button onClick={() => [window.open(initpoint), onClose()]}>
                  Pagar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </WrapperGral>
      </FormWrapper>
      <Footer />
    </>
  );
};

export default CheckoutPage;