import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setNotes } from '../features/selectionSlice';

const Notes: React.FC = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.selection.notes);

  return (
    <div className="mb-4">
      <textarea
        value={notes}
        onChange={(e) => dispatch(setNotes(e.target.value))}
        className="border p-2 w-full"
        placeholder="Enter your notes"
      />
    </div>
  );
};

export default Notes;
