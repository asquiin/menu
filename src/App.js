import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';
import './app.css';

class App extends Component {
  render() {
    const navigationItems = [
      { path: '/', label: 'Home', component: <Home /> },
      { path: '/Menu', label: 'Menu', component: <Menu /> },
      { path: '/Cart', label: 'Cart', component: <Cart /> },
    ];

    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            {navigationItems.map(item => (
              <li key={item.path}>
                <NavLink to={item.path}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <Routes>
            {navigationItems.map(item => (
              <Route key={item.path} exact path={item.path} element={item.component} />
            ))}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
