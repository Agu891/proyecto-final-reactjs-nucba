import React from 'react';
import * as cartActions from '../../redux/cart/cart-actions';
import { formatPrice } from '../../utils/formatPrice';
import { useDispatch } from 'react-redux';
import {
  SeccionVentasWrapper,
  WrapperProductos,
  CardWrapper,
  ImgWrapper,
  TextWrapper,
  BtnAzul,
} from './SeccionVentasElements';
import { useCategories } from '../../hooks/useCategories';

const SeccionVentas = ({ section, setSection }) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, isSuccess } = useCategories();
  const addToCart = (i) => {
    dispatch(cartActions.addItem(i));
  };

  const porcentajeRecargoCredito = (numero) => {
    return (numero * 15) / 100 + numero;
  };
  if (isLoading) {
    return <SeccionVentasWrapper> Cargando...</SeccionVentasWrapper>;
  } else if (isSuccess) {
    let resultadosFiltrados = () => {
      if (section === null) {
        return data.data.result;
      } else {
        return data.data.result.filter((data) => data.category === section);
      }
    };

    return resultadosFiltrados().map((item) => (
      <SeccionVentasWrapper>
        <div>
          <h2>{item.category}</h2>
        </div>
        <WrapperProductos>
          {item.products.map((products) => (
            <>
              <CardWrapper>
                <ImgWrapper>
                  <img src={products.imgUrl} alt={products.name} />
                </ImgWrapper>
                <TextWrapper>
                  <h3>{products.name}</h3>
                  <p>{formatPrice(products.price)}</p>
                  <span>
                    o <b>12</b> cuotas sin intereses de
                    <b>
                      {formatPrice(
                        parseInt(porcentajeRecargoCredito(products.price) / 12)
                      )}
                    </b>
                  </span>
                  <BtnAzul onClick={() => addToCart(products)}>
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
    ));
  } else if (isError) {
    <h2> Hubo un error al cargar la pagina! </h2>;
  }
};

export default SeccionVentas;
