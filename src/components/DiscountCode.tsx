import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setDiscountCode, generateDiscountCode } from '../features/selectionSlice';

const DiscountCode: React.FC = () => {
  const dispatch = useDispatch();
  const discountCode = useSelector((state: RootState) => state.selection.discountCode);
  const [inputCode, setInputCode] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCode(e.target.value);
  };

  const handleApplyCode = () => {
    if (/^DISCOUNT\d{4}$/.test(inputCode)) {
      dispatch(setDiscountCode(inputCode));
      setIsValid(true);
      alert('Discount applied successfully!');
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="mb-6">
      <div className="text-center mb-2 font-semibold">Enter Discount Code:</div>
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={inputCode}
          onChange={handleInputChange}
          className={`border p-2 mb-2 w-full max-w-xs ${!isValid && 'border-red-500'}`}
          placeholder="Enter discount code"
        />
        {!isValid && <div className="text-red-500 mb-2">Invalid discount code. Format: DISCOUNT####.</div>}
        <div className="flex space-x-2">
          <button onClick={handleApplyCode} className="bg-primary text-white py-2 px-4 rounded">
            Apply Code
          </button>
          <button onClick={() => dispatch(generateDiscountCode())} className="bg-secondary text-white py-2 px-4 rounded">
            Generate Code
          </button>
        </div>
        <div className="mt-4 text-center">Current Discount Code: <strong>{discountCode}</strong></div>
      </div>
    </div>
  );
};

export default DiscountCode;
