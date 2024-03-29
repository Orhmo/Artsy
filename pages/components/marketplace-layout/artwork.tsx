import React, { useState } from 'react'
import Image from 'next/image'

import { ARTWORKS } from '@/utils/data'
import Filter from './filter'
import PriceSlider from './slider'

interface Artwork {
  id: string
  name: string
  image: string
  category: string
  price: number
}

const Artworks = (): JSX.Element => {
  const [displayCount, setDisplayCount] = useState<number>(9)
  const [selectedCategories, setSelectedCategories] = useState<Array<string>>(['All'])
  const [priceRange, setPriceRange] = useState<[number, number]>([3, 100])
  const totalArtworks: number = ARTWORKS.length

  const categories: Array<string> = ['All', ...new Set(ARTWORKS.map((artwork) => artwork.category))]
  const displayedArtworks: Array<Artwork> = ARTWORKS.filter(
    (artwork) =>
      selectedCategories.includes('All') || selectedCategories.includes(artwork.category),
  )
    .filter((artwork) => artwork.price >= priceRange[0] && artwork.price <= priceRange[1])
    .slice(0, displayCount)

  const displayedCountText = `See 1-${displayedArtworks.length} of ${totalArtworks} results`

  const handleSeeMoreClick = (): void => {
    setDisplayCount(displayCount + 3)
  }

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const category = event.target.value
    const newSelectedCategories = [...selectedCategories]

    if (category === 'All') {
      // If "All" category is selected, uncheck all other categories
      newSelectedCategories.splice(1)
    } else {
      // If any other category is selected, uncheck the "All" category
      const allIndex = newSelectedCategories.indexOf('All')
      if (allIndex !== -1) {
        newSelectedCategories.splice(allIndex, 1)
      }
    }

    if (newSelectedCategories.includes(category)) {
      // Remove the category if it's already selected
      newSelectedCategories.splice(newSelectedCategories.indexOf(category), 1)
    } else {
      // Add the category if it's not already selected
      newSelectedCategories.push(category)
    }

    if (newSelectedCategories.length === 0) {
      // If no category is selected, recheck the "All" category
      newSelectedCategories.push('All')
    }

    setSelectedCategories(newSelectedCategories)
  }

  const handlePriceRangeChange = (values: number[]): void => {
    setPriceRange([values[0], values[1]])
  }

  return (
    <div className='m-4 grid grid-flow-col gap-8'>
      <div className='w-[20vw]'>
        <Filter
          categories={categories}
          selectedCategories={selectedCategories}
          handleCategoryChange={handleCategoryChange}
        />
        <PriceSlider handlePriceRangeChange={handlePriceRangeChange} />
      </div>
      <div className='flex flex-col items-center justify-center '>
        <div className='mt-4 mb-8 rounded-lg border px-8 py-2 text-center shadow-lg'>
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
              <span className='py-2 font-bold'>$ {artwork.price}</span>
            </div>
          ))}
        </div>

        {displayCount < totalArtworks && (
          <div className='mt-16 cursor-pointer rounded-lg border-2 px-10 py-3 transition-all hover:bg-blue-50 hover:text-gray-500'>
            <button onClick={handleSeeMoreClick}>See more</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Artworks
