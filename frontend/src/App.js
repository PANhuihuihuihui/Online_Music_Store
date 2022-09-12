import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Signup from './screens/Signup';
import Login from './screens/Login'
import MainPage from './screens/MainPage';
import Music from './screens/Music';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import CategoryPage from './screens/CategoryPage';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          {/* <Route exact path="/search/:query">
            <SearchPage />
          </Route> */}
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/music/:id">
            <Music />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route path="/category">
            <CategoryPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
