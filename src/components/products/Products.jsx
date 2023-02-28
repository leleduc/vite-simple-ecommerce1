import React, { useState } from 'react';
import css from './Products.module.scss';
import Plane from '../../images/plane.png';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { ProductsData } from '../../data/products';

const Products = () => {
  const [parent] = useAutoAnimate();
  const [menuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className={css.container}>
      <img src={Plane} alt="" className={css.featureImg}/>
      <h1>Our Featured Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter('skin care')}>Skin Care</li>
          <li onClick={() => filter('conditioner')}>Conditioners</li>
          <li onClick={() => filter('foundation')}>Foundations</li>
        </ul>
        <div className={css.list} ref={parent}>
          {menuProducts.map((product, i) => (
            <div className={css.product}>
              <div className={css.productLeft}>
                <div className={css.productName}>
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}</span>
                <div>Shop Now</div>
              </div>
              <img src={product.img} alt="" className={css.productImage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
