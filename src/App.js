import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Features from "./Components/Features/Features";
import Admin from "./Components/Admin/Admin";
import NotFound from "./Components/NotFound/NotFound";
import Deals from "./Components/Deals/Deals";
import Orders from "./Components/Orders/Orders";


export const BookContext = createContext();

function App() {
  const [allBooks, setAllBooks] = useState([]);

  return (
    <div >
      <h1>Hello world!!</h1>
      <BookContext.Provider value={[allBooks, setAllBooks]}>
        <Router>
          <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
            <Navbar.Brand>Book Pavilion</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><Link to="/Features">Features</Link></Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                <Nav.Link ><Link to="/Orders">orders</Link></Nav.Link>
                <Nav.Link><Link to="/Deals">Deals</Link></Nav.Link>
                <Nav.Link><Link to="/Admin">Admin</Link></Nav.Link>
                <Nav.Link><Link to="/Login">Login</Link></Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/Deals">
              <Deals></Deals>
            </Route>
            <Route path="/orders">
              <Orders></Orders>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <Route path="/Features">
              <Features></Features>
            </Route>
            <Route path="/Admin">
              <Admin></Admin>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>

      </BookContext.Provider>

    </div>
  );
}

export default App;
