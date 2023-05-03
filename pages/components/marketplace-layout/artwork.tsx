import React, { useState } from 'react';
import Image from 'next/image';

import Filter from './Filter';

import { ARTWORKS } from '@/utils/data';

const Artworks = (): JSX.Element => {
  const [displayCount, setDisplayCount] = useState<number>(9);
  const totalArtworks: number = ARTWORKS.length;

  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>(ARTWORKS);

  const displayedArtworks: Array<Artwork> = filteredArtworks.slice(0, displayCount);
  const displayedCountText: string = `See 1-${displayCount} of ${totalArtworks} results`;

  const handleSeeMoreClick = (): void => {
    setDisplayCount(displayCount + 3);
  };

  const handleFilter = (selectedCategories: string[]): void => {
    if (selectedCategories.length === 0) {
      setFilteredArtworks(ARTWORKS);
    } else {
      const filtered = ARTWORKS.filter((artwork: Artwork) => selectedCategories.includes(artwork.category));
      setFilteredArtworks(filtered);
    }
    setDisplayCount(9);
  };

  return (
    <div className='flex justify-center items-center my-4'>
      <div className='flex flex-row'>
        <Filter onFilter={handleFilter} />
      </div>
      <div className='text-center mt-4 px-8 py-2 border rounded-lg shadow-lg mb-8'>
        {displayedCountText}
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

export default Artworks;
