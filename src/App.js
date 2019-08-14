import React,{Fragment} from 'react';
import { BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
// import PropTypes from 'prop-types';
import Navbar from './components/layouts/navBarComponent';
import Shop from './components/shopComponent';
import About from './components/aboutComponent';
import Home from './components/homeComponent';
import NotFound from './components/notFoundComponent';

function App() {
  return (
     <Router>
        <Fragment>
                <div className="container">
                <Navbar />
                <Home />
                    <Switch>
                        <Route exact path="/" componet={Home}/>             
                        <Route exact path="/about"  component={About} />
                        <Route exact path="/shop"  component={Shop} />
                        <Route component={NotFound} />
                    </Switch>                               
                </div>
            </Fragment>
    </Router>
  );
}

export default App;
