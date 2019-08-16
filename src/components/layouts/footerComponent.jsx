import React,{Component,Fragment} from 'react';
import { Link }  from 'react-router-dom';

class Footer extends Component {

    state = {};

    render() { 
        return (
            <Fragment>
               <footer className="footer">
                   <div className="footer__box1">
                        <ul>
                            <li>
                                <Link  to="/shop">&copy; . DayZero Group </Link>
                            </li>
                            <li>
                                <Link  to="/shop">Instagram </Link>
                            </li>
                            <li>
                                <Link  to="/shop">Twitter</Link>
                            </li>
                        </ul>
                   </div>

                   <div className="footer__box2">
                        <ul>
                            <li>
                                <Link  to="/shop">Terms and Conditions</Link>
                            </li>
                            <li>
                                <Link  to="/shop">Privacy Policy</Link>
                            </li>
                        </ul>
                   </div>
               </footer>
             </Fragment>
          
       );
    }

}


export default Footer;