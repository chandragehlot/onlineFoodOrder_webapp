import "./style/combine.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import AppHeader from "./components/app-header";
import HomeContainer from "./container/home";
import MenuContainer from "./container/menu-page";
import SignUpContainer from "./container/signup";
import LoginContainer from "./container/login";
import Footer from "./components/footer";
import Error from "./components/error";

const logger = createLogger({});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <AppHeader></AppHeader>
          <div className="app-body-holder">
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path="/home" component={HomeContainer}></Route>
              <Route path="/menu" component={MenuContainer}></Route>
              <Route path="/login" component={LoginContainer}></Route>
              <Route path="/signup" component={SignUpContainer}></Route>
              <Route path="/error" component={Error}></Route>
            </Switch>
          </div>
          <Footer></Footer>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
