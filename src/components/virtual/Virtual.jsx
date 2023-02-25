import React from 'react';
import css from './Virtual.module.scss';
import Shade from '../../images/shade.png';
import Before from '../../images/before.png';
import After from '../../images/after.png';
import ReactCompareImage from 'react-compare-image';

const Virtual = () => {
  return (
    <div className={css.container}>
      {/* Left Side */}
      <div className={css.left}>
        <span>Virtual Try-On</span>
        <span>Never Buy the wrong Shade Again!</span>
        <span>Try Now!</span>
        <img src={Shade} alt="" />
      </div>

      {/* Right Side */}
      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
