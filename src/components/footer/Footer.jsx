import React from 'react';
import css from './Footer.module.scss';
import Logo from '../../images/logo.png';
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from '@heroicons/react/outline';

const Footer = () => {
  return (
    <div className={css.container}>
      <hr />
      <div className={css.wrapper}>
        {/* Logo */}
        <div className={css.logo}>
          <img src={Logo} alt="logo" />
          <span>Ecommerce App</span>
        </div>
        {/* Contact */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>095 Coc Leu, Lao Cai city, VN 330000</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:+84918983869">(+84)918-983-869</a>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mail:leleduc@gmail.com">leleduc@gmail.com</a>
            </span>
          </div>
        </div>

        {/* Account */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>Sign in</span>
            </span>
          </div>
        </div>

        {/* Company */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <span>About us</span>
            </span>
          </div>
        </div>

        {/* Resources */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>Safety Privacy & Terms</span>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright @2023 by DucAnh</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
