import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";
import cart from "./cart.png";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };
  if (cartItems.length === 0) {
    return (
      <div className=" mt-16 px-72">
        <Link to="/app" className="px-56 text-lg mt-20 text-orange-500">
          Cart is Empty Click to Shop
        </Link>
        <img className="px-52 mt-10 w-auto h-96" src={cart} alt="images" />
      </div>
    );
  }
  return (
    <div data-testid="cart-list" className="flex flex-col mx-80">
      <button className=" flex w-40 p-3 mt-5 rounded-lg text-slate-50 font-semibold h-15 bg-green-600 float-right">
        <Link to="/checkout">Proceed CheckOut</Link>
      </button>
      {cartItems.map((cartItem, index) => (
        <div
          key={index}
          className="flex gap-5 justify-between items-center border border-black p-2 m-5"
        >
          <div className="flex flex-col">
            <p>{cartItem.name}</p>
            <p>Rs.{(cartItem.price / 100).toFixed(0)}</p>
            <p className="font-medium">Quantity: {cartItem?.qunatity}</p>
            <button
              className="bg-orange-700 text-white w-20 rounded-md"
              onClick={() => {
                handleRemove(cartItem.id);
              }}
            >
              Remove
            </button>
          </div>
          <div>
            <img
              className="w-36"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                cartItem.imageId
              }
              alt="images"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cart;
