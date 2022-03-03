import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Rating from '../../../Components/Rating';
import useCart from './Cart/useCart';

const ProductDetails = () => {
  const { handleAddCart } = useCart();
  const { id } = useParams();
  const products = useSelector((state) => state.market.products.products);
  const product = products.find((p) => p._id === id);
  const { name, price, brand, img, description, rating } = product;

  return (
    <div className="mt-[88px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* image of the product */}
          <img src={img} alt="" />
          {/* Product description */}
          <div className="flex flex-col justify-around">
            <div>
              <h3 className="text-primary ">{name}</h3>
              <p>Brand: {brand}</p>
            </div>
            <h3 className="text-green-600">$ {price}</h3>
            <p className="text-gray-600">{description}</p>
            <button
              onClick={() => handleAddCart(id, name, img, price)}
              className="btn bg-primary px-4 py-2"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* Rating & Review of a product */}
      <div className="w-10/12 mx-auto mt-6">
        <h6 className="mb-10">Ratings and reviews of {name}</h6>
        {/* Rating */}
        <h6 className="mt-6 ml-0 md:ml-10 inline border-b-2 border-gray-700">
          Rating
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-5 mt-6">
          <div className="col-span-2 flex flex-col items-center justify-center">
            <h1>
              {rating}/ <span className="text-gray-600">5</span>{' '}
            </h1>
            <div className="flex">
              <Rating rating={rating} size={35} />
            </div>
            <p>120 people review this</p>
          </div>
          {/* start base rating parsenatge */}
          <div className="col-span-3">
            {/* 5 start */}
            <div className="flex items-center">
              <h6>5</h6>
              <Rating rating={1} size={30} />
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ml-4">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: '70%' }}
                ></div>
              </div>
              <h6 className="">70%</h6>
            </div>
            {/* 4 start */}
            <div className="flex items-center">
              <h6>4</h6>
              <Rating rating={1} size={30} />
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ml-4">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: '55%' }}
                ></div>
              </div>
              <h6 className="">55%</h6>
            </div>
            {/* 3 star */}
            <div className="flex items-center">
              <h6>3</h6>
              <Rating rating={1} size={30} />
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ml-4">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: '45%' }}
                ></div>
              </div>
              <h6 className="">45%</h6>
            </div>
            {/* 2 start */}
            <div className="flex items-center">
              <h6>2</h6>
              <Rating rating={1} size={30} />
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ml-4">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: '15%' }}
                ></div>
              </div>
              <h6 className="">15%</h6>
            </div>
            {/* 1 start */}
            <div className="flex items-center">
              <h6>5</h6>
              <Rating rating={1} size={30} />
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ml-4">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: '5%' }}
                ></div>
              </div>
              <h6 className="">5%</h6>
            </div>
          </div>
        </div>
        {/* Review */}
        <div className="mt-10">
          <h6 className="ml-0 md:ml-10 mb-6 inline border-b-2 border-gray-700">
            Reviews
          </h6>
          {/* single review */}
          <div className="md:w-11/12 mx-auto shadow-md px-10 py-5 rounded-lg mb-6">
            <div className="flex justify-between">
              <h6>User name</h6>
              <p>12/02/2021</p>
            </div>
            <div className="flex items-center">
              <h6>5</h6>
              <Rating rating={1} />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              corrupti necessitatibus inventore asperiores consequatur
              perspiciatis facilis ad omnis ipsam, eos rem non porro dicta
              dolore! Soluta veritatis eveniet quisquam magnam sapiente
              perferendis, amet sed illo expedita, quia autem et perspiciatis
              error reprehenderit, laborum corporis. Inventore, deserunt! Ullam
              id architecto cupiditate!
            </p>
          </div>
          {/* single review */}
          <div className="md:w-11/12 mx-auto shadow-md px-10 py-5 rounded-lg mb-6">
            <div className="flex justify-between">
              <h6>User name</h6>
              <p>12/02/2021</p>
            </div>
            <div className="flex items-center">
              <h6>4</h6>
              <Rating rating={1} />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              corrupti necessitatibus inventore asperiores consequatur
              perspiciatis facilis ad omnis ipsam, eos rem non porro dicta
              dolore! Soluta veritatis eveniet quisquam magnam sapiente
              perferendis, amet sed illo expedita, quia autem et perspiciatis
              error reprehenderit, laborum corporis. Inventore, deserunt! Ullam
              id architecto cupiditate!
            </p>
          </div>
          {/* single review */}
          <div className="md:w-11/12 mx-auto shadow-md px-10 py-5 rounded-lg mb-6">
            <div className="flex justify-between">
              <h6>User name</h6>
              <p>12/02/2021</p>
            </div>
            <div className="flex items-center">
              <h6>3</h6>
              <Rating rating={1} />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              corrupti necessitatibus inventore asperiores consequatur
              perspiciatis facilis ad omnis ipsam, eos rem non porro dicta
              dolore! Soluta veritatis eveniet quisquam magnam sapiente
              perferendis, amet sed illo expedita, quia autem et perspiciatis
              error reprehenderit, laborum corporis. Inventore, deserunt! Ullam
              id architecto cupiditate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
