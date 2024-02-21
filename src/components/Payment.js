import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
// import Razorpay from "razorpay";

function Payment() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const data = useSelector((store) => store.payment.data);
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post("http://localhost:5000/razorpay", data);
    console.log(result);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id, currency } = result.data;

    const options = {
      key: "rzp_test_va8Xsijr3WzJY1", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",
      // image: { logo },
      order_id: id,
      handler: async function (response) {
        const data = {
          orderCreationId: id,
          razorpayPaymentId: id,
          razorpayOrderId: id,
          razorpaySignature: id,
        };
        // const result = await axios.post(
        //   "http://localhost:5000/payment/success",
        //   data
        // );
        // console.log(result);

        // alert(result.data.msg);y
        
      },
      // prefill: {
      //     name: "Soumya Dey",
      //     email: "SoumyaDey@example.com",
      //     contact: "9999999999",
      // },
      // notes: {
      //     address: "Soumya Dey Corporate Office",
      // },
      // theme: {
      //     color: "#61dafb",
      // },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      <div className="flex flex-col p-3  gap-3 ">
        <h3>Email address</h3>
        <input
          className="border-solid border-2 border-gray-400 rounded-md h-11 p-4"
          placeholder="Enter your Email"
          type="email"
          value=""
          min="1"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3>Name</h3>
        <input
          className="border-solid border-2 border-gray-400 rounded-md h-11 p-4"
          placeholder="Enter your Name"
          type="text"
          value=""
          min="1"
          onChange={(e) => setName(e.target.value)}
        />
        <h3>Contact info</h3>
        <input
          className="border-solid border-2 border-gray-400 rounded-md h-11 p-4"
          placeholder="Enter your Number"
          type="text"
          value=""
          min="1"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          className="bg-gray-600 text-gray-100 h-10 w-32 rounded-lg m-3 font-medium"
          onClick={displayRazorpay()}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
}

export default Payment;
