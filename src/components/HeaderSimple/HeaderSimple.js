import React from 'react';

import { Link } from 'react-router-dom';
import { NavBarSimple, Logo } from './HeaderSimpleElement';
const HeaderSimple = () => {
  return (
    <NavBarSimple>
      <Logo>
        <Link to="/">
          <h1>PcGeeks</h1>
        </Link>
      </Logo>
    </NavBarSimple>
  );
};

export default HeaderSimple;
