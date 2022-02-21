import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Categorie from './MarketComponents/Categorie';
import LatestProduct from './MarketComponents/LatestProduct';
import MarketBanner from './MarketComponents/MarketBanner';
import Modal from './MarketComponents/ProductDetails';
import RegularProduct from './MarketComponents/RegularProduct';

const EMarket = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mt-[88px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <Link to="/cart">go to cart</Link>
      <Link className='ml-4' to="/marketdashboard">go to dashboard</Link>
      {/* Banner */}
      <MarketBanner></MarketBanner>
      {/* Catagories */}
      <Categorie></Categorie>
      {/* Display latest and regular Product */}
      <div className="grid grid-cols-6 gap-0 md:gap-6 mx-2 md:mx-24 mt-16">
        {/* Latest Product */}
        <div className="col-span-6 md:col-span-2 h-min md:h-full">
          <h6 className="inline border-b-2 border-primary">Latest product</h6>
          {products.length > 0 && (
            <LatestProduct
              lastProduct={products[products.length - 1]}
            ></LatestProduct>
          )}
        </div>
        {/* Regular Product */}
        <div className="col-span-7 md:col-span-4">
          <div className="w-full flex justify-between mt-10 md:mt-0">
            <h6 className="inline border-b-2 border-primary">
              Regular products
            </h6>
            <p className="font-semibold mr-6 hover:border-b-2 border-secondary cursor-pointer">
              see all
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-6">
            {products.slice(0, 8).map((product) => (
              <RegularProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default EMarket;
