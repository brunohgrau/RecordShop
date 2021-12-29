import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/cartActions";
import { useQuery } from "react-query";
import { getProduct } from "../api";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  // Handlers

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(cartItem.product));
  };

  return (
    <div>
      <div className="flex items-center -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <img className="md:h-24" src={cartItem.imageUrl} alt="" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-xs">{cartItem.artistName}</span>
            <span className="text-xs">{cartItem.recordName}</span>
            <a
              className="mt-2 ml-0 md:mt-0 font-semibold hover:text-red-500 text-red-300 text-xs
              cursor-pointer "
              onClick={() => removeFromCartHandler()}
            >
              Remove
            </a>
          </div>
        </div>
        <div className="flex justify-center ml-10 md:ml-0 sm:w-2/5 lg:w-1/5">
          <select
            class="form-select mt-1 block w-1/2"
            value={cartItem.quantity}
            onChange={(e) =>
              dispatch(addToCart(cartItem.product, Number(e.target.value)))
            }
          >
            {[...Array(cartItem.count).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </div>
        <span className="hidden md:block text-center w-1/5 font-semibold text-sm">
          {cartItem.price}&euro;
        </span>
        <span className="hidden md:block text-center w-1/5 font-semibold text-sm">
          {cartItem.price * cartItem.quantity > 0
            ? cartItem.price * cartItem.quantity
            : 0}
          &euro;
        </span>
      </div>
    </div>
  );
};

export default CartItem;
