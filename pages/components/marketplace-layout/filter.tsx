import React from 'react';

interface FilterProps {
  categories: Array<string>;
  selectedCategories: Array<string>;
  handleCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ categories, selectedCategories, handleCategoryChange }: FilterProps): JSX.Element => {
  return (
    <div className='mt-4'>
      <h1 className='font-bold mb-2 border-b-2 py-4'>Filter</h1>
          <div className='flex flex-col mx-auto py-6'>
          <p className='py-4 font-bold'>By category</p>
        {categories.map(category => (
          <label key={category}>
            <input
              type='checkbox'
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={handleCategoryChange}
              className=''
            />
            
            <span className='p-3'>{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
