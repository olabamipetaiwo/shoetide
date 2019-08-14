import React,{Component,Fragment} from 'react';
import { Link }  from 'react-router-dom';

class NavBar extends Component {

    state = {};

    render() { 
        return (
            <Fragment>
                <h2>Navbar</h2>
                <nav>
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="/About">About</Link>
                </nav>      
             </Fragment>
          
       );
    }

}


export default NavBar;