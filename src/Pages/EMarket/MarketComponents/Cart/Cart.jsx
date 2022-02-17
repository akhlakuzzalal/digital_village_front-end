import React from 'react';
import CartTotal from './CartTotal';
import TableBody from './TableBody';

const Cart = () => {
  const cartProduct = [
    {
      name: 'Product name',
      img: 'https://i.ibb.co/fq1j9w3/grocery-shopping-prev-ui.png',
      categorie: 'Anything',
      price: 210,
      quantity: 1,
    },
    {
      name: 'Product name',
      img: 'https://i.ibb.co/fq1j9w3/grocery-shopping-prev-ui.png',
      categorie: 'Anything',
      price: 210,
      quantity: 1,
    },
    {
      name: 'Product name',
      img: 'https://i.ibb.co/fq1j9w3/grocery-shopping-prev-ui.png',
      categorie: 'Anything',
      price: 210,
      quantity: 1,
    },
  ];
  return (
    <div
      className="mt-[88px] w-11/12 mx-auto"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-md sm:rounded-lg">
              <table class="min-w-full">
                {/* Table head */}
                <thead class="bg-gray-300">
                  <tr>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                    >
                      Unit price
                    </th>
                    <th scope="col" class="relative py-3 px-6">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table body */}
                  {cartProduct.map((data) => (
                    <TableBody key={data.id} data={data}></TableBody>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Cart totall */}
      <div className="w-full flex justify-end mt-10">
        <div className="w-full md:w-3/6">
          <CartTotal></CartTotal>
        </div>
      </div>
    </div>
  );
};

export default Cart;
