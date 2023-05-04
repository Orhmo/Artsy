import React, { useState } from 'react';
import { Range } from 'react-range';

interface ArtworkFilterProps {
  handlePriceRangeChange: (values: number[]) => void;
}

const ArtworkFilter: React.FC<ArtworkFilterProps> = ({ handlePriceRangeChange }) => {
  const [values, setValues] = useState([3, 100]);

  const handleValuesChange = (newValues: number[]) => {
    setValues(newValues);
    handlePriceRangeChange(newValues);
  };

  return (
    <div className='mt-4'>
      <h1 className='font-bold mb-2 border-b-2 py-4'>By Price</h1>
          <div className='py-2'>
              
          <div className='flex justify-between text-lg py-6 px-6'>
          <span>${values[0].toFixed(2)}</span>
                  <span className='px-2'>-</span>
                  <span>${values[1].toFixed(2)}</span>
        </div>
        <Range
          step={0.5}
          min={3}
          max={100}
          values={values}
          onChange={handleValuesChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className='h-2 rounded-md bg-gray-400'
              style={{ display: 'flex', width: '100%' }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className='h-6 w-6 rounded-full bg-white border-2 border-gray-400'
            />
          )}
        />
       
      </div>
    </div>
  );
};

export default ArtworkFilter;
