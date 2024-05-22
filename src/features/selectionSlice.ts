import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  selectedOption: string;
  discountCode: string;
  notes: string;
}

const initialState: AppState = {
  selectedOption: '',
  discountCode: '',
  notes: ''
};

// Helper function to generate a random discount code in the format "DISCOUNT2024"
const generateRandomCode = () => {
  const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit number
  return `DISCOUNT${randomNumber}`;
};

const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
    setDiscountCode: (state, action: PayloadAction<string>) => {
      state.discountCode = action.payload;
    },
    setNotes: (state, action: PayloadAction<string>) => {
      state.notes = action.payload;
    },
    generateDiscountCode: (state) => {
      state.discountCode = generateRandomCode();
    }
  }
});

export const { setSelectedOption, setDiscountCode, setNotes, generateDiscountCode } = selectionSlice.actions;
export default selectionSlice.reducer;
