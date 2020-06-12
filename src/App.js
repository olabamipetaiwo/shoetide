import React from 'react';
import { BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import Navbar from './components/layouts/navBarComponent';
import Footer from './components/layouts/footerComponent';
import Shop from './components/shopComponent';
import About from './components/aboutComponent';
import Home from './components/homeComponent';
import Paystack from './components/paystackComponent';
import NotFound from './components/notFoundComponent';

const App = () => {
  return (
     <Router>
             <div className="container">
                     <Navbar />
                      <Switch>
                          <Route exact path="/" component={Home}/>            
                          <Route exact path="/about"  component={About} />
                          <Route exact path="/paystack"  component={Paystack} />
                          <Route exact path="/shop"  component={Shop} />
                          <Route component={NotFound} />
                      </Switch> 
                      <Footer />                        
              </div>
    </Router>
  );
}

export default App;
