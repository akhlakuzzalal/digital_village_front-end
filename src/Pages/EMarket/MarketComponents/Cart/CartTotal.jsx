import React from 'react';
import { Link } from 'react-router-dom';

const CartTotal = () => {
  return (
    <div>
      <h3 className="inline border-b-2 border-primary">Cart Total</h3>
      <div className="mt-6">
        <div className="flex justify-between items-center py-3 bg-slate-300 px-3 rounded-t-xl">
          <p>Subtotal</p>
          <p>$ 120</p>
        </div>
        <div className="flex justify-between items-center py-3 bg-slate-100 px-3">
          <p>Shipping</p>
          <p>$ 120</p>
        </div>
        <div className="flex justify-between items-center py-3 bg-slate-300 px-3">
          <p>Tax</p>
          <p>$ 120</p>
        </div>
        <div className="flex justify-between items-center py-3 bg-slate-100 px-3 rounded-b-xl">
          <p>Total</p>
          <p>$ 120</p>
        </div>
      </div>
      <Link to="/checkout">
        <button className="px-4 py-2 text-white bg-secondary rounded-full mt-6">
          Proceed to checkout
        </button>
      </Link>
    </div>
  );
};

export default CartTotal;
