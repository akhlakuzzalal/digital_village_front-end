import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useMarketAdminDashboard from '../utility/useMarketAdminDashboard';

const AddProducts = ({ sidebar, setSidebar }) => {
  const { addANewProduct } = useMarketAdminDashboard();
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm();
  const handleAddProduct = (data) => {
    addANewProduct(data);
    reset();
  };
  return (
    <>
      <div
        className={`absolute w-2/4 top-[80px] rounded-xl bg-slate-400 right-0  ${
          sidebar ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-700`}
      >
        {/* body */}
        <div className="justify-center items-center min-h-full  space-y-6 px-4 py-6">
          <h3 className="text-center space-y-2">Add a New Product</h3>
          <form
            onSubmit={handleSubmit(handleAddProduct)}
            className="space-y-6 mx-auto w-3/4"
          >
            {/* name */}
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('name', {
                required: 'Name is Required',
                maxLength: {
                  value: 25,
                  message: "First Name shouldn't exceed 15 words",
                },
              })}
              onKeyUp={() => {
                trigger('name');
              }}
              placeholder="Name"
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}

            <div className="flex items-center space-x-3">
              {/* categorie */}
              <input
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('categorie', {
                  required: 'Categorie is Required',
                })}
                onKeyUp={() => {
                  trigger('categorie');
                }}
                placeholder="Categorie"
              />
              {errors.categorie && (
                <small className="text-danger">
                  {errors.categorie.message}
                </small>
              )}
              {/* brand */}
              <input
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('brand', { required: 'Brand is Required' })}
                onKeyUp={() => {
                  trigger('brand');
                }}
                placeholder="Brand"
              />
              {errors.brand && (
                <small className="text-danger">{errors.brand.message}</small>
              )}
            </div>
            {/* price */}
            <input
              type="number"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
              {...register('price', {
                required: 'Price is Required',
                min: {
                  value: 1,
                  message: 'Minimum Required price is 1',
                },
                max: {
                  value: 50000,
                  message: 'Maximum allowed price is 50000',
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Only numbers price allowed',
                },
              })}
              onKeyUp={() => {
                trigger('price');
              }}
              placeholder="Price"
            />
            {errors.price && (
              <small className="text-danger">{errors.price.message}</small>
            )}
            {/* description */}
            <textarea
              type="text"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
              {...register('description', {
                required: 'Description is Required',
                minLength: {
                  value: 200,
                  message: 'Minimum Required length is 200',
                },
                maxLength: {
                  value: 1500,
                  message: 'Maximum allowed length is 1500',
                },
              })}
              placeholder="Description"
              onKeyUp={() => {
                trigger('description');
              }}
            ></textarea>
            {errors.description && (
              <small className="text-danger">
                {errors.description.message}
              </small>
            )}
            {/* img */}
            <input
              type="url"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
              {...register('img', { required: 'Image link is Required' })}
              onKeyUp={() => {
                trigger('img');
              }}
              placeholder="Image link"
            />
            {errors.img && (
              <small className="text-danger">{errors.img.message}</small>
            )}
            {/* rating */}
            <input
              type="number"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
              {...register('rating', {
                required: 'Rating is Required',
                min: {
                  value: 1,
                  message: 'Minimum Required rating is 1',
                },
                max: {
                  value: 5,
                  message: 'Maximum allowed rating is 5',
                },
                pattern: {
                  // value: /^[0-9,.-+%#]*$/,
                  message: 'Only numbers rating allowed',
                },
              })}
              onKeyUp={() => {
                trigger('rating');
              }}
              placeholder="Rating"
            />
            {errors.rating && (
              <small className="text-danger">{errors.rating.message}</small>
            )}
            {/* submit btn */}
            <input
              className="bg-primary hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
              type="submit"
              value="Add Product"
            />
          </form>
        </div>
        {/* close sidebar */}
        <div className="absolute top-0 right-0 cursor-pointer">
          <AiOutlineCloseCircle
            size={30}
            className="text-primary"
            onClick={() => setSidebar(false)}
          />
        </div>
      </div>
    </>
  );
};

export default AddProducts;
