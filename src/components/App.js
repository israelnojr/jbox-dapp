import React, { Component } from 'react';
import './App.css';
import './front/css/main.css';
// import './front/vendor/fontawesome-free/css/all.min.css';
// import './front/vendor/bootstrap/css/bootstrap.min.css';
// import './front/vendor/owl-carousel/owl.carousel.css';
// import './front/vendor/owl-carousel/owl.theme.css';


//pages
import Home from '../pages/Home';
import Channel from '../pages/Channel';
import Upload from '../pages/Upload';
import Watch from '../pages/Watch';
import Error from '../pages/Error';


import {Route, Switch} from 'react-router-dom';
import Navbar from '../components/partials/Navbar';
import Sidebar from '../components/partials/Sidebar';
import Footer from '../components/partials/Footer';

// import './front/vendor/jquery/jquery.min.js';
// import './front/vendor/bootstrap/js/bootstrap.bundle.min.js';
// import './front/vendor/jquery-easing/jquery.easing.min.js';
// import './front/vendor/owl-carousel/owl.carousel.js';
// import './front/js/custom.js';

function App() {
  return (
    <>
      <Navbar />
      <div id="wrapper">
        <Sidebar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/channel" component={Channel} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/watch" component={Watch} />
          <Route component={Error} />
        </Switch>
        </div>
        <Footer />
    </>
  );
}

export default App;
