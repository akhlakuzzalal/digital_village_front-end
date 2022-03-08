import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../../../../redux/slices/eMarket/productsSlice';
import SingleProduct from './SingleProduct';

const AllProducts = () => {
  const products = useSelector((state) => state.market.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <div>
      found {products?.length}
      <div className="grid grid-cols-6 gap-6">
        {products?.map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
