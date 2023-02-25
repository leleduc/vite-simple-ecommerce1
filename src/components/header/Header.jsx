import React from 'react';
import css from './Header.module.scss';
import logo from '../../images/logo.png';
import { CgShoppingBag } from 'react-icons/cg';

const Header = () => {
  return (
    <div className={css.container}>
      {/*Logo and Shop Name */}
      <div className={css.logo}>
        <img src={logo} alt="logo" />
        <span>Ecommerce App</span>
      </div>

      <div className={css.right}>
        {/* Menu */}
        <div className={css.menuContainer}>
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
        <input type="text" placeholder="Search" className={css.search} />

        {/* Shoping Cart */}
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
