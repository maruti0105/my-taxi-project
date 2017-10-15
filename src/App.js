import React, {Component} from 'react';
import Car2go from './components/car2gotable';
import Mytaxi from './components/mytaxitable';
import Maptaxi from './components/mytaximap';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import Filter from './components/filter';




class App extends Component {
  render() {
    //
    return (
      <div className='container'>

      <BrowserRouter>
        <div id="app">
          <Nav/>
          <Route exact path='/' component={Home}/>
          <Route path='/myTaxi/map' component={Maptaxi}/>
          <Route path='/mytaxi/vehicles' component={Mytaxi}/>
          <Route path='/car2go/vehicles' component={Car2go}/>
          <Route path='/car2go/filtertable' component={Filter}/>
          <Route path='/myTaxi/filter' component={Filter}/>

          <Footer/>
        </div>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
