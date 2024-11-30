import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavbarComp from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavbarComp/>
        <Routes>
          <Route path="/" Component={Product}/>
          <Route path="/cart" Component={Cart}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
