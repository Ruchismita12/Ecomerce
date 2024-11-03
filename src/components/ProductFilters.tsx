import { useState } from 'react';

interface ProductFiltersProps {
  onSortChange: (sort: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function ProductFilters({ onSortChange, onCategoryChange }: ProductFiltersProps) {
  const [activeSort, setActiveSort] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const handleSortChange = (sort: string) => {
    setActiveSort(sort);
    onSortChange(sort);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Sort By</h3>
        <div className="space-y-2">
          {[
            { id: 'price-asc', label: 'Price: Low to High' },
            { id: 'price-desc', label: 'Price: High to Low' },
            { id: 'rating', label: 'Customer Rating' },
            { id: 'best-sellers', label: 'Best Sellers' },
          ].map((sort) => (
            <button
              key={sort.id}
              onClick={() => handleSortChange(sort.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeSort === sort.id
                  ? 'bg-[#FF6B01] text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {sort.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {[
            'All',
            'Men\'s Clothing',
            'Women\'s Clothing',
            'Perfumes',
            'Makeup',
            'Footwear',
          ].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category.toLowerCase())}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeCategory === category.toLowerCase()
                  ? 'bg-[#FF6B01] text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}