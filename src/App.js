import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/home/home';
import AboutUsPage from './pages/aboutUs/aboutUs';
import ServicesPage from './pages/services/services';
import SellerRegPage from './pages/register/sellerReg';
import ContactUsPage from './pages/contactUs/contactUs';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import './App.css';

class App extends Component {

  render (){
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/aboutUs' component={AboutUsPage} />
            <Route path='/services' component={ServicesPage} />
            <Route path='/sellerReg' component={SellerRegPage} />
            <Route path='/contactUs' component={ContactUsPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
