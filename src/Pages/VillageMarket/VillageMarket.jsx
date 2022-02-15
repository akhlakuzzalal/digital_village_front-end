import React, { useEffect, useState } from 'react';
import Categorie from './MarketComponents/Categorie';
import MarketBanner from './MarketComponents/MarketBanner';
import RegularProduct from './MarketComponents/RegularProduct';

const VillageMarket = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="w-full h-24 bg-gradient-to-r from-purple-300 to-pink-300"></div>
      <MarketBanner></MarketBanner>
      <Categorie></Categorie>
      <div className="grid grid-cols-6 gap-6 mx-2 md:mx-24 mt-16">
        <div className="col-span-2">
          <h6 className="inline border-b-2 border-primary">Latest product</h6>
        </div>
        <div className="col-span-4">
          <h6 className="inline border-b-2 border-primary">Regular products</h6>
          <div className="grid grid-cols-4 gap-6 mt-6">
            {products.map((product) => (
              <RegularProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillageMarket;
