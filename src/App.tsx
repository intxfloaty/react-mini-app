import React from 'react';
import RadioButtons from './components/RadioButtons';
import DiscountCode from './components/DiscountCode';
import Notes from './components/Notes';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">React TypeScript App</h1>
        <RadioButtons />
        <DiscountCode />
        <Notes />
      </div>
    </div>
  );
};

export default App;
