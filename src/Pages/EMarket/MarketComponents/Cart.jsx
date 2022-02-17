import React from 'react';

const Cart = () => {
  const cartProduct = [
    {
      name: 'Product name',
      img: 'https://i.ibb.co/fq1j9w3/grocery-shopping-prev-ui.png',
      categorie: 'Anything',
      price: 210,
    },
    {
      name: 'Product name',
      img: 'https://i.ibb.co/fq1j9w3/grocery-shopping-prev-ui.png',
      categorie: 'Anything',
      price: 210,
    },
    {
      name: 'Product name',
      img: 'https://i.ibb.co/fq1j9w3/grocery-shopping-prev-ui.png',
      categorie: 'Anything',
      price: 210,
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
                <thead class="bg-gray-300 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Unit price
                    </th>
                    <th scope="col" class="relative py-3 px-6">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- Product 1 --> */}
                  {cartProduct.map((data) => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        <img className="h-20 w-20" src={data.img} alt="" />
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        1
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        $2999
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-right text-danger cursor-pointer whitespace-nowrap">
                        Remove
                      </td>
                    </tr>
                  ))}
                  {/* <!-- Product 2 --> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
