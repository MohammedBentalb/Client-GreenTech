import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// type TProduct = {
//   id: number;
//   name: string;
//   description: string;
//   price: string;
//   stock: number;
//   image: string;
//   category: string;
//   rating: number;
//   reviews: number;
//   isNew: boolean;
// };

type ProductsT = {
  category_id: number;
  description: string;
  id: number;
  image: string;
  name: string;
  price: string;
  stock: number;
};

export default function Product({ product }: { product: ProductsT }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <img
          src={"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=500&fit=crop"}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {product.stock < 100 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Stock limité
          </div>
        )}
        {true && (
          <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Nouveau
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
            {"farming"}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-4 h-4 text-yellow-400"
              //@ts-ignore
              filled={star <= 3}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">
            ({3})
          </span>
        </div>

        {/* Price and Stock */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-gray-900">
              {product.price}€
            </div>
            <div className="text-xs text-gray-500">
              {product.stock.toLocaleString()} en stock
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Link to={`/products/${product.id}`} className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium hover:bg-green-700 transition-all flex items-center justify-center gap-2 text-sm">
          Details
        </Link>
      </div>
    </div>
  );
}
