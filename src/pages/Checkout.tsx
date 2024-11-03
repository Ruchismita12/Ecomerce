import { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B01] focus:border-transparent"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B01] focus:border-transparent"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B01] focus:border-transparent"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B01] focus:border-transparent"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B01] focus:border-transparent"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">PIN Code</label>
              <input
                type="text"
                required
                pattern="[0-9]{6}"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B01] focus:border-transparent"
                value={formData.pincode}
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  pattern="[0-9]{16}"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B01] focus:border-transparent"
                  value={formData.cardNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, cardNumber: e.target.value })
                  }
                />
                <CreditCard className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  required
                  placeholder="MM/YY"
                  pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B01] focus:border-transparent"
                  value={formData.expiry}
                  onChange={(e) =>
                    setFormData({ ...formData, expiry: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input
                  type="text"
                  required
                  pattern="[0-9]{3,4}"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B01] focus:border-transparent"
                  value={formData.cvv}
                  onChange={(e) =>
                    setFormData({ ...formData, cvv: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF6B01] text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#e56201] transition-colors"
        >
          <Lock size={20} />
          <span>Pay Securely</span>
        </button>
      </form>
    </div>
  );
}