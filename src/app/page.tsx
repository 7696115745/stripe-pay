"use client";
import { useRouter } from "next/navigation";
const PaymentPage = () => {
  const route=useRouter()
  const handlePayment = () => {
    route.push("https://buy.stripe.com/test_5kA9B5bLC1aW6OI6op"); 
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Buy Our Product</h1>
        <p className="text-lg mb-6">
          Click the button below to proceed with the payment.
        </p>
        <button
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
