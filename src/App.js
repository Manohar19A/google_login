import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoutes from "./components/PrivateRoutes";
import DashBoard from "./components/DashBoard";
import ManageClub from "./components/ManageClub";
import Schoolclub from "./components/Schoolclub";
import Departments from "./components/Departments";
import Sections from "./components/Sections";
import Parents from "./components/Parents";
import SignUp from "./components/Signup.js";
import { createContext, useContext } from "react";
import RestaruentMenu from "./components/RestaurentMenu.js";
import store from "./redux/store.js"
import {Provider} from 'react-redux'
import Cart from "./components/Cart.js";
import CheckoutPage from "./components/CheckoutPage.js";
const UserInfo = createContext(null)
export const useFireBase= ()=>useContext(UserInfo)
function App() {
;
  return (
   <Provider store={store}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login  />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/app" element={<DashBoard />} />
          <Route path="/app/ac" element={<ManageClub />} />
          {/* <Route path="/app/ac/manage" element={<ManageClub />} /> */}
          <Route path="/app/ac/club" element={<Schoolclub />} />
          <Route path="/app/teachers/dep" element={<Departments />} />
          {/* <Route path="/app/teachers/sec" element={<Sections />} /> */}
          <Route path="/app/teachers" element={<Sections />} /> 
          <Route path="app/parents" element={<Parents />} />
          <Route path="restaurent/:resId" element={<RestaruentMenu/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<CheckoutPage />} /> 
        </Route>
      </Routes>
    </div>
   </Provider>
      

    
  );
}

export default App;
