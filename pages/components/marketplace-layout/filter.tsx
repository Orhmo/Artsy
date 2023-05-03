import React, { useState } from 'react';

import { ARTWORKS } from '@/utils/data';

interface Props {
  onFilter: (filteredArtworks: Artwork[]) => void;
}

const Filter: React.FC<Props> = ({ onFilter }) => {
  const categories: string[] = Array.from(new Set(ARTWORKS.map((artwork: Artwork) => artwork.category)));
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string): void => {
    const index = selectedCategories.indexOf(category);
    if (index === -1) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories([...selectedCategories.slice(0, index), ...selectedCategories.slice(index + 1)]);
    }
  };
    
  

  return (
    <div className='w-full flex justify-center'>
      <div className='flex items-center justify-between w-full max-w-lg p-4 bg-white shadow rounded-lg'>
        <div className='flex items-center space-x-4'>
          <span>Filter by category:</span>
          {categories.map((category: string) => (
            <div key={category} className='flex items-center space-x-2'>
              <input
                type='checkbox'
                id={`category_${category}`}
                name={`category_${category}`}
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className='form-checkbox h-5 w-5 text-blue-600 rounded'
              />
              <label htmlFor={`category_${category}`} className='font-medium text-gray-700'>
                {category}
              </label>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Filter;
