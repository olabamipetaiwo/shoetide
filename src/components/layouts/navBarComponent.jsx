import React,{Component,Fragment} from 'react';
import { Link }  from 'react-router-dom';
// import './img/logo.png';

class NavBar extends Component {

    state = {};

    render() { 
        return (
            <Fragment>
                <nav className="nav">
                    <div className="nav__logo">
                        <img className="nav__logo-item" alt="logo" src="./img/logo.png" />
                    </div> 
                    <ul className="nav__list">
                    
                           <li>
                                <Link className="nav__list-item" to="/shop">Shop</Link>
                           </li>
                           <li>
                               <Link className="nav__list-item" to="/about">What is Tide</Link>
                           </li>
                    </ul> 
                   
                </nav>      
             </Fragment>
          
       );
    }

}


export default NavBar;