import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserDetail from "./components/users/UserDetail";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user-detail/:id" component={UserDetail} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
