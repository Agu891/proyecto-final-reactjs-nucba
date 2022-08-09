import React from 'react';
import './headerSimple.css';
import { Link } from 'react-router-dom';
const HeaderSimple = () => {
  return (
    <nav id="navBarSimple">
      <div className="logo">
        <Link to="/">
          <h1>PcGeeks</h1>
        </Link>
      </div>
    </nav>
  );
};

export default HeaderSimple;
