import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../redux/slices/eMarket/modalSlicle';
import { fetchAllProducts } from '../../redux/slices/eMarket/productsSlice';
import AddToCart from './MarketComponents/AddToCart';
import Categorie from './MarketComponents/Categorie';
import LatestProduct from './MarketComponents/LatestProduct';
import MarketBanner from './MarketComponents/MarketBanner';
import RegularProduct from './MarketComponents/RegularProduct';

const EMarket = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  // single product for add  cart confirmation pop up
  const handleAddToCart = (product) => {
    setProduct(product);
    dispatch(setShowModal(true));
  };

  const products = useSelector((state) => state.market.products.products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div className="mt-[80px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      {/* Banner */}
      <MarketBanner></MarketBanner>
      {/* Catagories */}
      <Categorie></Categorie>
      {/* Display latest and regular Product */}
      <div className="grid grid-cols-6 gap-0 md:gap-6 mx-2 md:mx-24 mt-16">
        {/* Latest Product */}
        <div className="col-span-6 md:col-span-2 h-min md:h-full">
          <h6 className="inline border-b-2 border-primary">Latest product</h6>
          {products?.length > 0 && (
            <LatestProduct
              lastProduct={products[products?.length - 1]}
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
            {products?.slice(0, 8).map((product) => (
              <RegularProduct
                key={product._id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
      <AddToCart product={product} />
    </div>
  );
};

export default EMarket;
