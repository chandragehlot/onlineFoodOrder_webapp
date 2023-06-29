import "./style/combine.scss"

import { BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import { rootReducer } from "./reducers";
import AppHeader from "./components/app-header";
import HomeContainer from "./container/home";
import MenuContainer from "./container/menu-page";
import SignUpContainer from "./container/signup";
import LoginContainer from "./container/login";
import Footer from "./components/footer";
import OrderContainer from "./container/order";
import AddressEntry from "./container/address";
import OrderConfirmation from "./container/order-confirmation";
import OrderTracking from "./container/order-tracking";


const logger = createLogger({});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <AppHeader></AppHeader>
          <div className="app-body-holder">
            <Routes>
              <Route exact path="/" element={<HomeContainer/>}/>
              <Route path="/home" element={<HomeContainer/>}/>
              <Route path="/menu" element={<MenuContainer/>}/>
              <Route path="/order" element={<OrderContainer/>}/>
              <Route path="/login" element={<LoginContainer/>}/>
              <Route path="/signup" element={<SignUpContainer/>}/>
              <Route path="/address" element={<AddressEntry/>} />
              <Route path="/order-confirm" element={<OrderConfirmation/>} />
              <Route path="/order-tracking" element={<OrderTracking/>} />
              {/* <Route path="/" element={</>} /> */}
            </Routes>
          </div>
          <Footer></Footer>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
