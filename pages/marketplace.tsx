import React, { useState } from 'react';
import Image from 'next/image';

import NavBar from './components/navBar';
import Footer from './components/footer';

import { ARTWORKS } from '../utils/data';

const Marketplace = (): JSX.Element => {
  const [displayCount, setDisplayCount] = useState<number>(9);
  const [selectedCategories, setSelectedCategories] = useState<Array<string>>(['All']);
  const totalArtworks: number = ARTWORKS.length;

  const categories: Array<string> = ['All', ...new Set(ARTWORKS.map(artwork => artwork.category))];
  const displayedArtworks: Array<Artwork> = ARTWORKS
  .filter(artwork => selectedCategories.includes('All') || selectedCategories.includes(artwork.category))
  .slice(0, displayCount);

  const displayedCountText: string = `See 1-${displayedArtworks.length} of ${totalArtworks} results`;

  const handleSeeMoreClick = (): void => {
    setDisplayCount(displayCount + 3);
  };

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
    <div className='flex flex-col justify-center items-center my-4'>
      <div className='text-center mt-4 px-8 py-2 border rounded-lg shadow-lg mb-8'>
        {displayedCountText}
      </div>

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

      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12'>
        {displayedArtworks.map((artwork: Artwork) => (
          <div
            className='mx-auto flex flex-col flex-wrap justify-center gap-2 rounded-2xl p-4 shadow-2xl shadow-blue-50'
            key={artwork.id}
          >
            <Image src={artwork.image} alt='' />
            <h2 className='py-4 uppercase italic'>{artwork.name}</h2>
            <span className='py-2 font-bold'>{artwork.price}</span>
          </div>
        ))}
      </div>

      {displayCount < totalArtworks && (
        <div className='border-2 px-10 py-3 rounded-lg mt-16 cursor-pointer hover:bg-blue-50 hover:text-gray-500 transition-all'>
          <button onClick={handleSeeMoreClick}>See more</button>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
