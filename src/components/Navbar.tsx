import { Search, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav className="bg-[#353535] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-[#FF6B01] text-2xl font-bold">ApnaMart</span>
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B01]"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-500">
                <Search size={20} />
              </button>
            </form>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/account" className="hover:text-[#FF6B01] transition-colors">
              <User size={24} />
            </Link>
            <Link to="/cart" className="hover:text-[#FF6B01] transition-colors relative">
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FF6B01] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>
          </div>
        </div>

        <div className="py-2 flex space-x-6 text-sm">
          {['Men', 'Women', 'Perfumes', 'Makeup', 'Footwear'].map((category) => (
            <Link
              key={category}
              to={`/?category=${category.toLowerCase()}`}
              className="hover:text-[#FF6B01] transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}