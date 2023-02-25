import React from 'react';
import css from './Hero.module.scss';
import heroImg from '../../images/hero.png';
import { CgShoppingBag } from 'react-icons/cg';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Hero = () => {
  const transition = { duration: 3, type: 'spring' };

  return (
    <div className={css.container}>
      {/* Left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>

        <div className={css.text2}>
          <span>trendy collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>

      {/* Middle side - hero image */}
      <div className={css.wrapper}>
        {/* Blue Circle */}
        <motion.div
          initial={{ bottom: '2rem' }}
          whileInView={{ bottom: '0rem' }}
          transition={transition}
          className={css.blueCircle}
        ></motion.div>

        {/* Blue Circle */}
        <motion.img
          initial={{ bottom: '-2rem' }}
          whileInView={{ bottom: '0rem' }}
          transition={transition}
          src={heroImg}
          alt="Hero Image"
          width={600}
        />

        {/* Cart div animation */}
        <motion.div
          initial={{ right: '4%' }}
          whileInView={{ right: '2%' }}
          transition={transition}
          className={css.cart2}
        >
          <CgShoppingBag className={css.cart2Item} />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
