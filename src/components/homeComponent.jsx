import React,{Fragment,useState} from 'react';
import { Link }  from 'react-router-dom';

const Home = () => {

   // const [title,setTitle] = useState('Tide');

        return (
            <Fragment>
                 <div className="home">
                    <h1 className="home-h1">Tide< span className="home-span">1.0</span></h1>
                    <h5 className="home-h5">FEEL EMPOWERED IN TIDE</h5>
                    <button className="home-btn">SHOP NOW</button>
                 </div>
             </Fragment>
          
       );
}


export default Home;