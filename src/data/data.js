//funcion   de formateo de precios
export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(price);
};

export const productos = [
  {
    nombre: 'RTX 3090',
    img: '/img/Tarjetas de video/rtx 3090.jpg',
    seccion: 'Tarjetas de video',
    precio: 300000,
  },
  {
    nombre: 'RTX 3080ti',
    img: '/img/Tarjetas de video/rtx 3080ti.jpg',
    seccion: 'Tarjetas de video',
    precio: 250000,
  },
  {
    nombre: 'RTX 3080',
    img: '/img/Tarjetas de video/rtx 3080.jpg',
    seccion: 'Tarjetas de video',
    precio: 200000,
  },
  {
    nombre: 'rx 6700 xt',
    img: '/img/Tarjetas de video/rx 6700 xt.jpg',
    seccion: 'Tarjetas de video',
    precio: 175000,
  },
  {
    nombre: 'rx6900 xt',
    img: '/img/Tarjetas de video/rx6900 xt.jpg',
    seccion: 'Tarjetas de video',
    precio: 200000,
  },
  {
    nombre: 'Corsair Vengeance lfx',
    img: '/img/RAMs/Corsair Vengeance lfx.jpg',
    seccion: 'Memorias',
    precio: 50000,
  },
  {
    nombre: 'Gskill trident z RGB',
    img: '/img/RAMs/Gskill trident z RGB.jpg',
    seccion: 'Memorias',
    precio: 75000,
  },
  {
    nombre: 'Gskill trident z royal',
    img: '/img/RAMs/Gskill trident z royal.jpg',
    seccion: 'Memorias',
    precio: 85000,
  },
  {
    nombre: 'Hyperx Fury 8gb',
    img: '/img/RAMs/Hyperx Fury 8gb.jpg',
    seccion: 'Memorias',
    precio: 60000,
  },
  {
    nombre: 'Patriot viper Rgb',
    img: '/img/RAMs/Patriot viper Rgb.jpg',
    seccion: 'Memorias',
    precio: 65000,
  },
  {
    nombre: 'ASUS crosshair dark hero VIII',
    img: '/img/Mothers/ASUS crosshair dark hero VIII.jpg',
    seccion: 'Motherboards',
    precio: 120000,
  },
  {
    nombre: 'ASUS TUF gaming b450',
    img: '/img/Mothers/ASUS TUF gaming b450.jpg',
    seccion: 'Motherboards',
    precio: 90000,
  },
  {
    nombre: 'Gigabyte Aorus z690 elite',
    img: '/img/Mothers/Gigabyte Aorus z690 elite.jpg',
    seccion: 'Motherboards',
    precio: 98000,
  },
  {
    nombre: 'Gigabyte b660m gaming x',
    img: '/img/Mothers/Gigabyte b660m gaming x.jpg',
    seccion: 'Motherboards',
    precio: 70000,
  },
  {
    nombre: 'MSI x570 ',
    img: '/img/Mothers/MSI x570 .jpg',
    seccion: 'Motherboards',
    precio: 50000,
  },
];

export const items = productos.reduce((res, item) => {
  if (!res[item.seccion]) {
    res[item.seccion] = [];
  }
  res[item.seccion] = [...res[item.seccion], item];
  return res;
}, {});
