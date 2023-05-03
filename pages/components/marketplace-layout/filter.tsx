import React, { useState } from 'react';

import { ARTWORKS } from '@/utils/data';

interface Props {
  onFilter: (filteredArtworks: Artwork[]) => void;
}

const Filter: React.FC<Props> = ({ onFilter }) => {
    const [selectedCategories, setSelectedCategories] = useState<Array<string>>(['All']);
    
    const categories: Array<string> = ['All', ...new Set(ARTWORKS.map(artwork => artwork.category))];
   
    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const category = event.target.value;
        const newSelectedCategories = [...selectedCategories];
    
        if (category === 'All') {
          // If "All" category is selected, uncheck all other categories
          newSelectedCategories.splice(1);
        } else {
          // If any other category is selected, uncheck the "All" category
          const allIndex = newSelectedCategories.indexOf('All');
          if (allIndex !== -1) {
            newSelectedCategories.splice(allIndex, 1);
          }
        }
    
        if (newSelectedCategories.includes(category)) {
          // Remove the category if it's already selected
          newSelectedCategories.splice(newSelectedCategories.indexOf(category), 1);
        } else {
          // Add the category if it's not already selected
          newSelectedCategories.push(category);
        }
    
        if (newSelectedCategories.length === 0) {
          // If no category is selected, recheck the "All" category
          newSelectedCategories.push('All');
        }
    
        setSelectedCategories(newSelectedCategories);
      };
  

  return (
    <div className='flex justify-center gap-4 mb-4'>
    {categories.map(category => (
      <label key={category}>
        <input
          type='checkbox'
          value={category}
          checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
                className=''
               
        />
       {category}
      </label>
    ))}
  </div>

  );
};

export default Filter;
