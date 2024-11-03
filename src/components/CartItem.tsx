import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">{item.category}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <Minus size={16} />
          </button>
          <span className="mx-4">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold">₹{item.price * item.quantity}</p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 mt-2"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}