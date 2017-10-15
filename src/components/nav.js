import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import './Cssfile/nav.css'

class Nav extends Component {
  render() {
    return (
      <ul className='nav'>
        <li>
          <NavLink activeClassName='active' exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/car2go/vehicles'>
            Car2go-Table
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/mytaxi/vehicles'>
            My-Taxi-table
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/myTaxi/map'>
            Map
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/myTaxi/filter'>
            MyTaxi-filtertable
          </NavLink>
        </li>

      </ul>
    );
  }
}

export default Nav
