import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { orderList } from "../redux/paymentSlice";
import Payment from "./Payment";
const CheckoutPage = () => {
  const initialCart = [
    { id: 1, name: "Pizza", price: 10, quantity: 2 },
    { id: 2, name: "Burger", price: 5, quantity: 1 },
    // Add more items as needed
  ];
const dispatch = useDispatch()
  const [cart, setCart] = useState(initialCart);
  const [pay,setPay]=useState(false)
  

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };
  const cartItems = useSelector((store) => store.cart.items);
  const calculateSubtotal = (item) => {
    return parseInt(item.price) * parseInt(item.quantity);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      if (item.price !== undefined && item.qunatity !== undefined) {
        return acc + item.price * item.qunatity;
      } else {
        console.warn("Item has missing or undefined price/quantity:", item);
        return acc;
      }
    }, 0);
    return (total/100).toFixed(0);
  };

  return (
    <div className="bg-white h-auto shadow-lg border-solid border-2 border-neutral-400 items-center px-52 py-10 m-4">
      {pay ? <Payment/>:(<><h2 className="font-bold text-2xl">Order Summary</h2>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <span className="font-semibold">{item.name}</span>
              <span className="px-5">Price: ₹{(item.price /100).toFixed(0)}</span>
              <span>
                Quantity: {item.qunatity}
                {/* <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                /> */}
              </span>
              <span className="px-3">
                {item.qunatity} X {(item.price / 100).toFixed(0)} = ₹
                {(item?.qunatity*(item?.price / 100).toFixed(0))}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <h3 className="text-gray-600 font-medium">
          Total: ₹{calculateTotal()}
        </h3>
      </div>

      <button
        className="bg-green-500 text-gray-100 h-10 w-32 rounded-lg m-3 font-medium"
        onClick={() => {
          dispatch(orderList(calculateTotal()))
          setPay(true)
         }}
      >
        Place Order
      </button></>)}
      
      
      {/* <div className="flex flex-col p-3  gap-3 ">
        <h3>Email address</h3>
        <input
          className="border-solid border-2 border-gray-400 rounded-md h-11 p-4"
          placeholder="Enter your Email"
          type="text"
          value=""
          min="1"
          onChange={(e) => console.log(e.target.value)}
        />
        <h3>Name</h3>
        <input
          className="border-solid border-2 border-gray-400 rounded-md h-11 p-4"
          placeholder="Enter your Name"
          type="text"
          value=""
          min="1"
          onChange={(e) => console.log(e.target.value)}
        />
        <h3>Contact info</h3>
        <input
          className="border-solid border-2 border-gray-400 rounded-md h-11 p-4"
          placeholder="Enter your Number"
          type="text"
          value=""
          min="1"
          onChange={(e) => console.log(e.target.value)}
        />
        <button
          className="bg-gray-600 text-gray-100 h-10 w-32 rounded-lg m-3 font-medium"
          onClick={() => alert("Order placed!")}
        >
          Proceed to Pay
        </button>
      </div> */}
    </div>
  );
};

export default CheckoutPage;
