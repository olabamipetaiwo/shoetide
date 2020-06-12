import React,{Fragment} from 'react';
import { Link }  from 'react-router-dom';

const Home = () => {

        return (
            <Fragment>
                 <section className="home">
                    <h1 className="home-h1">Tide< span className="home-span">1.0</span></h1>
                    <h5 className="home-h5">FEEL EMPOWERED IN TIDE</h5>
                    <button className="home-btn">
                           <Link to="/shop">SHOP NOW</Link>
                    </button>
                    <img className="home-pinkshoe" src="https://res.cloudinary.com/dbif8p032/image/upload/v1591924744/pink_niojih.png" alt="pinkshoe" />
                    <img className="home-whiteshoe" src="https://res.cloudinary.com/dbif8p032/image/upload/v1591924714/white_gou8ss.png" alt="whiteshoe" />
                 </section>
                 <section className="adv">
                     <div className="adv__image">
                         <img className="adv__image-item" src="https://res.cloudinary.com/dbif8p032/image/upload/v1591924783/advbg_iypzfu.jpg" alt="whiteshoe" />
                     </div>
                     <div className="adv__box">
                         <h3 className="adv__box-h3">The best-fitting everyday Shoe</h3>
                         <p className="adv__box-p">Scroll down to find out why</p>
                     </div> 
                 </section>
                 <section className="details">
                     <div className="details__box">
                        <h3 className="details-h3 mb1">
                            Comfort meets Flexibility
                        </h3>
                        <p className="details-p">
                            Tides comes with EVA midsole and insole, which offfers
                            maximum durability which comes with shock-absorbing
                            tech that reduces impact on the entire foot. 
                        </p>
                     </div>
                     <div className="details__box">
                        <h2 className="details-h3 grey">
                           #IWearTide
                        </h2>
                        <h3 className="details-h3 mb1">
                            For the Culture
                        </h3>
                        <p className="details-p">
                            Our customers buy #tide because it makes them feel
                            good from the ground up.They are beautifull and lovely 
                            in their simplicity with wavy lines to keep dirt away. 
                        </p>
                     </div>
                 </section>
                 <section className="cta mb2">
                     <h3 className="cta-h3">
                         Join the Tide Community today
                     </h3>
                     <button className="cta-btn">
                        <Link to="/shop">SHOP NOW</Link>
                     </button>
                 </section>
               
             </Fragment>
          
       );
}
export default Home;