import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Navbar from './components/CustomNavbar';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
        <TopBanner />
        <Content />
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
