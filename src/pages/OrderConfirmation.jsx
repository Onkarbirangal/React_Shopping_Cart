import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
const OrderConfirmation = ({ deliveryDetails }) => {
  return (
    <>
      <div className="container mx-auto md:px-8 pt-12">
        <div
          className="p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl 
        mx-auto text-center mt-12 border border-green-700  text-white"
        >
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6 drop-shadow-lg" />

          <h2 className="text-4xl font-extrabold text-white mb-4">
            Order Confirmed!
          </h2>

          <p className="text-lg text-gray-300 mb-6">
            Your transaction is complete. A confirmation email has been sent to
            your account.
          </p>

          <div
            className="p-6 bg-green-900/50 border border-green-700 rounded-xl
           font-mono text-left inline-block text-green-300 text-sm"
          >
            <p className="font-semibold text-lg mb-1">
              {deliveryDetails?.name}
            </p>
            <p>{deliveryDetails?.address}</p>
            <p>
              {deliveryDetails?.city},{deliveryDetails?.zip}
            </p>
          </div>
          <div className="mx-30">
            <Link
              to={"/"}
              className="mt-10 px-6 py-2.5 
               bg-orange-600 text-white font-bold rounded-full
                shadow-md shadow-orange-800/50 cursor-pointer hover:bg-orange-700 
                transition duration-150 flex items-center justify-center
                 space-x-2 transform hover:ring-2 hover:ring-pink-600/50 uppercase tracking-tight "
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
