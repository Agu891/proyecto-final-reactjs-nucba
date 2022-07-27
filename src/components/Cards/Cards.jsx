import React from 'react';
import './cards.css';

const Cards = (props) => {
  return (
    <>
      <div className="cardWrapper">
        <div class="imgWrapper">
          <img src={props.img} alt="" />
        </div>
        <div className="textWrapper">
          <h3>{props.nombre}</h3>

          <p>{props.precio}</p>
          <span>
            <b>12</b> cuotas sin intereses de <b>{props.cuotas}</b>
          </span>
          <button>Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
