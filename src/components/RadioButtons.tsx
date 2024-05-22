import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setSelectedOption } from '../features/selectionSlice';

const RadioButtons: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.selection.selectedOption);

  return (
    <div className="mb-4">
      <label className="mr-4">
        <input
          type="radio"
          value="Option A"
          checked={selectedOption === 'Option A'}
          onChange={(e) => dispatch(setSelectedOption(e.target.value))}
          className="mr-2"
        />
        Option A
      </label>
      <label className="mr-4">
        <input
          type="radio"
          value="Option B"
          checked={selectedOption === 'Option B'}
          onChange={(e) => dispatch(setSelectedOption(e.target.value))}
          className="mr-2"
        />
        Option B
      </label>
      <label className="mr-4">
        <input
          type="radio"
          value="Option C"
          checked={selectedOption === 'Option C'}
          onChange={(e) => dispatch(setSelectedOption(e.target.value))}
          className="mr-2"
        />
        Option C
      </label>
    </div>
  );
};

export default RadioButtons;
