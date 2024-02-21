// Import necessary React components and hooks
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "./OIP.png";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/loginSlice";
const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { setUserData } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const handleLogin = () => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          // setUserData(res.user);
          JSON.stringify(sessionStorage.setItem("login", res.user));
          navigate("/app");
          dispatch(loginUser(res.user))
          alert("Login successful");
        })
        .catch((er) => {
          if (er?.message.includes("auth/invalid-email")) {
            console.log(er.message);
            alert("Invalid email");
          } else if (er?.message.includes("auth/invalid-credential")) {
            alert("Invalid-credential");
          }
        });
    } else {
      alert("Please enter both email and password");
      console.log("Please enter both email and password");
    }
  };
  const signup = () => {
    navigate("/signup");
  };
  const googleLogin = () => {
    // navigate("/app");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // setUserData(user);
        dispatch(loginUser(user))
        JSON.stringify(sessionStorage.setItem("login", user));
        navigate("/app");
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // console.log(user);
  return (
    <div className="flex flex-col items-center m-10 bg-slate-400 rounded-lg">
      <h2 className="text-lg text-yellow-400 font-bold">Login Page</h2>
      {/* Email input field */}
      <label>Email:</label>
      <input
        className="rounded-md border-black p-3 px-16"
        // style={{padding:'15px',borderRadius:'10px'}}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Password input field */}
      <label>Password:</label>
      <input
        className="rounded-md border-black p-3 px-16"
        // style={{padding:'15px',borderRadius:'10px'}}
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Login button */}
      <button
        className="bg-amber-500 m-3 p-3 rounded-xl px-10 text-white"
        onClick={handleLogin}
      >
        Login
      </button>
      <button
      style={{display:'flex'}}
        onClick={googleLogin}
        className="bg-white m-2 p-2 rounded-xl px-5 text-black font-bold gap-2 border-solid border-2 border-gray-600"
      >
        <img
          style={{ height: "30px", width: "30px",borderRadius:'10px' }}
          src={google}
          alt="google"
        />
        LogIn With Google
      </button>
      <p onClick={signup} style={{ color: "blue" }}>
        New User? SignUp here
      </p>
    </div>
  );
};

export default Login;
