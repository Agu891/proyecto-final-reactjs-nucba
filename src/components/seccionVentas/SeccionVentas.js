import React from 'react';
import * as cartActions from '../../redux/cart/cart-actions';
import { formatPrice } from '../../utils/formatPrice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  SeccionVentasWrapper,
  WrapperProductos,
  CardWrapper,
  ImgWrapper,
  TextWrapper,
  BtnAzul,
} from './SeccionVentasElements';

const SeccionVentas = ({ section, setSection }) => {
  const dispatch = useDispatch();
  const porcentajeRecargoCredito = (numero) => {
    return (numero * 15) / 100 + numero;
  };

  let items = useSelector((state) => state.products.items);
  if (section) {
    items = { [section]: items[section] };
  }
  const addToCart = (i) => {
    dispatch(cartActions.addItem(i));
  };

  return (
    <>
      {Object.entries(items).map(([seccionName, items]) => {
        return (
          <>
            <SeccionVentasWrapper id="ventas">
              <div>
                <h2>{seccionName}</h2>
              </div>
              <WrapperProductos>
                {items.map((item) => (
                  <>
                    <CardWrapper>
                      <ImgWrapper>
                        <img src={item.img} alt={item.name} />
                      </ImgWrapper>
                      <TextWrapper>
                        <h3>{item.name}</h3>

                        <p>{formatPrice(item.price)}</p>
                        <span>
                          o <b>12</b> cuotas sin intereses de
                          <b>
                            {formatPrice(
                              parseInt(
                                porcentajeRecargoCredito(item.price) / 12
                              )
                            )}
                          </b>
                        </span>
                        <BtnAzul onClick={() => addToCart(item)}>
                          Agregar al carrito
                        </BtnAzul>
                      </TextWrapper>
                    </CardWrapper>
                  </>
                ))}
              </WrapperProductos>
              {section && (
                <BtnAzul
                  onClick={() => {
                    setSection(null);
                    window.location.replace('/#ventas');
                  }}
                >
                  Ver todos los productos
                </BtnAzul>
              )}
            </SeccionVentasWrapper>
            ;
          </>
        );
      })}
    </>
  );
};
export default SeccionVentas;
