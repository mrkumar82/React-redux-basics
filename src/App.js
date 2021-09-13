import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserDetail from "./components/users/UserDetail";
import Contact from "./components/contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/Header";
import EditContact from "./components/contact/EditContact";
import AddContact from "./components/contact/AddContact";

export default function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Contact} />
            <Route exact path="/add-contact" component={AddContact} />
            <Route exact path="/edit-contact/:id" component={EditContact} />

            <Route exact path="/home" component={Home} />
            <Route exact path="/user-detail/:id" component={UserDetail} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
