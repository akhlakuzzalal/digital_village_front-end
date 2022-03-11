import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../../../../redux/slices/eMarket/modalSlicle';
import { fetchAllProducts } from '../../../../../redux/slices/eMarket/productsSlice';
import AddProducts from './AddProducts';
import SingleProduct from './SingleProduct';
import UpdateProduct from './UpdateProduct';

const AllProducts = () => {
  const [sidebar, setSidebar] = useState();
  const products = useSelector((state) => state.market.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  // update Product
  const [selectedProduct, setSelectedProduct] = useState({});
  const updateProduct = (product) => {
    setSelectedProduct(product);
    dispatch(setShowModal(true));
  };
  return (
    <div>
      <h3>Found {products?.length} Products</h3>
      <button
        onClick={() => setSidebar(true)}
        className="px-6 py-2 rounded-xl mb-6 bg-info"
      >
        Add Product
      </button>
      <div className="flex flex-wrap justify-evenly items-center gap-6 ">
        {products?.map((product) => (
          <SingleProduct
            key={product._id}
            product={product}
            updateProduct={updateProduct}
          />
        ))}
      </div>
      <UpdateProduct product={selectedProduct} />
      <AddProducts setSidebar={setSidebar} sidebar={sidebar} />
    </div>
  );
};

export default AllProducts;
