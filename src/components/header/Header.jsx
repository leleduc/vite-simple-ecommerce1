import React, { useState, useRef } from 'react';
import css from './Header.module.scss';
import logo from '../../images/logo.png';
import { CgShoppingBag } from 'react-icons/cg';
import { GoThreeBars } from 'react-icons/go';

const Header = () => {
  const [ShowMenu, setShowMenu] = useState(true);
  const navRef = useRef();

  const toggleMenu = () => {
    setShowMenu((ShowMenu) => !ShowMenu);
    // navRef.current.classList.toggle('responsive_nav');
  };
  return (
    <div className={css.container}>
      <div className={css.bars} onClick={toggleMenu}>
        <GoThreeBars className={css.barIcon}/>
      </div>

      {/*Logo and Shop Name */}
      <div className={css.logo}>
        <img src={logo} alt="logo" />
        <span>Ecommerce App</span>
      </div>

      {/* Menu */}
      <div
        className={css.menuContainer}
        style={{ display: ShowMenu ? 'inherit' : 'none' }}
      >
        <ul className={css.menu}>
          <li>
            <a href="">Collections</a>
          </li>
          <li>
            <a href="">Brands</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Sales</a>
          </li>
          <li>
            <a href="">ENG</a>
          </li>
        </ul>
      </div>

      {/* Search */}
      <input type="text" placeholder="Search" className={css.search} />

      {/* Shoping Cart */}
      <CgShoppingBag className={css.cart} />
    </div>
  );
};

export default Header;
