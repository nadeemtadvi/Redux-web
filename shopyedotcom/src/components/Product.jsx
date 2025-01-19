import { useSelector, useDispatch } from "react-redux";
import { cartAddItem } from "../store/cartReducer";

export default function Product({ productId, title, rating, price, imageUrl }) {
  const dispatch = useDispatch()
  return (
    <div className="product bg-white border border-gray-200 rounded-lg p-4 overflow-hidden">
      <div className="flex flex-col h-full justify-between">
        <div className="product-image">
          <img src={imageUrl} alt={title} className="w-full h-56 object-fit" />
          <div className="title-container p-2">
            <h3 className="text-lg font-medium text-gray-800">
              <a href="#" className="hover:text-blue-500 ellipsiss">
                {title}
              </a>
            </h3>
          </div>
        </div>

        <div>
          <div className="price-rating-container p-2 flex justify-between items-center">
            <p className="rating text-yellow-500 font-bold">
              {+rating} ★ ★ ★ ★
            </p>
            <p className="price text-lg font-semibold text-gray-700">
              ${price}
            </p>
          </div>
          <div className="cta-container p-2 flex justify-between">
            <button onClick={() => dispatch(cartAddItem({ productId, title, rating, price, imageUrl }))} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
