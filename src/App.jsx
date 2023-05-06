import { Routes, Route} from "react-router-dom";
// import { routesPath, PrivateAdminRoute } from "./Routes";
import Home from "./Views/Home";
import About from "./Views/About";
import ProductDetails from "./Views/ProductDetails";
import NavigatorBar from "../Components/NavigatorBar";
import CartItems from "./Component/cartItems";
import Cart from "./Component/Cart";
import CheckOut from "./Views/checkOut";
import LoginPage from "./Views/loginPage";
import AccountOverView from "./Views/MyAccount";
import OrderIndex from "./Views/orderIndex";
import MessageIndex from "./Views/messageindex";
import PendingReviewsIndex from "./Views/pendingreviewsindex";
import VoucherIndex from "./Views/voucherindex";
import SavedItems from "./Views/SavedItems";
import MyAccount from "./Views/MyAccount";

function App() {
// const privateRoutes = routes.privateRoutes.map(
//       ({ path, title, component: Component, exact }) => (
//         <Route
//           key={path}
//           exact={exact}
//           path={path}
//           element={
//             <PrivateAdminRoute path={path} key={path} exact={exact} title={title}>
//               <Component title={title} />
//               <Sidebar SideBarLinks={SideBarLinks} />
//             </PrivateAdminRoute>
//           }
//         />
//       )
//     );


  // const authRoutes = Routes.authRoutes.map(
  //   ({ path, component: Component, exact }) => (
  //     <Route path={path} key={path} exact={exact} element={<Component />} />
  //   )
  // );

  return (
    



    <div className="App">

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="productdetails/:productID" element={<ProductDetails />} />
        <Route path="navigatorbar" element={<NavigatorBar />} />
        <Route path="cartitems" element={<CartItems />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="loginpage" element={<LoginPage />} />
        <Route path="accountoverview" element={<AccountOverView/>}/>
        <Route path="orderindex" element={<OrderIndex/>}/>
        <Route path="messageindex" element={<MessageIndex/>}/>
        <Route path="pendingreviewsindex" element={<PendingReviewsIndex/>}/>
        <Route path="voucherindex" element={<VoucherIndex/>}/>
        <Route path="saveditems" element={<SavedItems/>}/>
        <Route path="myaccount" element={<MyAccount/>} />
        {/* <BrowserRouter>
        <Routes>
          {privateRoutes}
        </Routes>
      </BrowserRouter> */}
      </Routes>
    </div>
  );
}

export default App;
