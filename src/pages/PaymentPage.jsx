import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    pin: '',
    cardHolderName: ''
  });
  const [upiId, setUpiId] = useState('');
  const [netBankingDetails, setNetBankingDetails] = useState({
    accountNumber: '',
    ifscCode: ''
  });

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    if ((paymentMethod === 'credit' || paymentMethod === 'debit') && (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv)) {
      alert('Please enter your card details.');
      return;
    }

    if (paymentMethod === 'debit' && !cardDetails.pin) {
      alert('Please enter your debit card PIN.');
      return;
    }

    if (paymentMethod === 'upi' && !upiId) {
      alert('Please enter your UPI ID.');
      return;
    }

    if (paymentMethod === 'netbanking' && (!netBankingDetails.accountNumber || !netBankingDetails.ifscCode)) {
      alert('Please enter your net banking details.');
      return;
    }

    const methodName = {
      credit: 'Credit Card',
      debit: 'Debit Card',

      upi: 'UPI',
      netbanking: 'Net Banking',
      wallet: 'Wallet',
    };

    alert(`Payment successful via ₹ ${methodName[paymentMethod]}!`);
    navigate('/');
  };

  const handleCardDetailChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleUpiChange = (e) => {
    setUpiId(e.target.value);
  };

  const handleNetBankingChange = (e) => {
    const { name, value } = e.target;
    setNetBankingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  if (!state) {
    return <div className="p-4 text-red-500">No booking information found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-900 rounded-xl shadow-xl text-white">
      <h2 className="text-3xl font-extrabold mb-6 text-center border-b border-gray-700 pb-4">Booking Confirmation</h2>

      <div className="bg-gray-800 p-6 rounded-lg space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-300">
          <div>
            <p className="font-medium text-gray-400">Name</p>
            <p>{state.firstName} {state.lastName}</p>
          </div>
          <div>
            <p className="font-medium text-gray-400">Email</p>
            <p>{state.email}</p>
          </div>
          <div>
            <p className="font-medium text-gray-400">Phone</p>
            <p>{state.phone}</p>
          </div>
          <div>
            <p className="font-medium text-gray-400">Check-in</p>
            <p>{state.checkIn}</p>
          </div>
          <div>
            <p className="font-medium text-gray-400">Check-out</p>
            <p>{state.checkOut}</p>
          </div>
          <div>
            <p className="font-medium text-gray-400">Members</p>
            <p>{state.members}</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xl font-semibold text-gray-200">Total Price: ₹ {state.totalPrice}</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <h3 className="text-2xl font-bold">Select Payment Method</h3>
        <div className="space-y-4">
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          >
            <option value="">--Select Payment Method--</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Net Banking</option>
          </select>
        </div>

        {/* Credit Card Details */}
        {paymentMethod === 'credit' && (
          <div>
            <h4 className="text-xl font-semibold">Credit Card Details</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                className="w-full sm:col-span-2 p-2 rounded bg-gray-700 border border-gray-600"
                value={cardDetails.cardNumber}
                onChange={handleCardDetailChange}
              />
              <input
                type="text"
                name="expiryDate"
                placeholder="Expiry Date"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                value={cardDetails.expiryDate}
                onChange={handleCardDetailChange}
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                value={cardDetails.cvv}
                onChange={handleCardDetailChange}
              />
            </div>
          </div>
        )}

        {/* Debit Card Details */}
        {paymentMethod === 'debit' && (
          <div>
            <h4 className="text-xl font-semibold">Debit Card Details</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                className="w-full sm:col-span-2 p-2 rounded bg-gray-700 border border-gray-600"
                value={cardDetails.cardNumber}
                onChange={handleCardDetailChange}
              />
              <input
                type="text"
                name="expiryDate"
                placeholder="Expiry Date"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                value={cardDetails.expiryDate}
                onChange={handleCardDetailChange}
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                value={cardDetails.cvv}
                onChange={handleCardDetailChange}
              />
              <input
                type="password"
                name="pin"
                placeholder="Debit Card PIN"
                className="w-full sm:col-span-2 p-2 rounded bg-gray-700 border border-gray-600"
                value={cardDetails.pin}
                onChange={handleCardDetailChange}
              />
            </div>
          </div>
        )}


        {/* UPI Details */}
        {paymentMethod === 'upi' && (
          <div>
            <h4 className="text-xl font-semibold">UPI ID</h4>
            <input
              type="text"
              value={upiId}
              onChange={handleUpiChange}
              className="w-full p-2 mt-2 rounded bg-gray-700 border border-gray-600"
              placeholder="Enter UPI ID"
            />
          </div>
        )}

        {/* Net Banking Details */}
        {paymentMethod === 'netbanking' && (
          <div>
            <h4 className="text-xl font-semibold">Net Banking Details</h4>
            <input
              type="text"
              name="accountNumber"
              placeholder="Account Number"
              className="w-full p-2 mt-2 rounded bg-gray-700 border border-gray-600"
              value={netBankingDetails.accountNumber}
              onChange={handleNetBankingChange}
            />
            <input
              type="text"
              name="ifscCode"
              placeholder="IFSC Code"
              className="w-full p-2 mt-2 rounded bg-gray-700 border border-gray-600"
              value={netBankingDetails.ifscCode}
              onChange={handleNetBankingChange}
            />
          </div>
        )}

        <button
          onClick={handlePayment}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-800 transition transform hover:scale-105 duration-300 p-2 rounded"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
