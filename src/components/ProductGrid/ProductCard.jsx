import PropTypes from 'prop-types';
import { useCart } from "../Cart/CartContext";
import { Button } from "../Ui/Button";
import { useState } from 'react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between min-h-28 h-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex  text-left ps-4 pt-4">
            <span className="text-white text-sm font-semibold">{product.description}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-[16px] font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mb-4">
          {product.category} | {product.color}
        </p>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-black text-white hover:bg-gray-800"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

// Add prop validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, 
  }).isRequired,
};
