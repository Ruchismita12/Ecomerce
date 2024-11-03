import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { addToCart } = useCart();

  const handleSortChange = (sort: string) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'best-sellers':
          return (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0);
        default:
          return 0;
      }
    });
    setFilteredProducts(sorted);
  };

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSearch = (query: string) => {
    const searchResults = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(searchResults);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="w-64 flex-shrink-0">
          <ProductFilters
            onSortChange={handleSortChange}
            onCategoryChange={handleCategoryChange}
          />
        </aside>
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}