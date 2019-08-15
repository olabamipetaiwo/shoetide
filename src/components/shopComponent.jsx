import React,{Fragment,useState} from 'react';
import { Link }  from 'react-router-dom';

const Shop = () => {
   // const [title,setTitle] = useState('Tide');

      return (
            <Fragment>
               <section className="cart">
                   <div className="cart__main">
                        <div className="cart__main__item">
                           <img className="cart__main__item-img" src="./img/white.png" alt="shoe" /> 
                        </div>
                        <div className="cart__main__picker">
                              <ul >
                                    <li> 
                                         <img className="cart__main__picker__item-img" src="./img/1.png" alt="shoe" />
                                    </li>  
                                    <li> 
                                         <img className="cart__main__picker__item-img" src="./img/3.png" alt="shoe" />
                                    </li>  
                                    <li> 
                                         <img className="cart__main__picker__item-img" src="./img/pink.png" alt="shoe" />
                                    </li>  
                                    <li> 
                                         <img className="cart__main__picker__item-img" src="./img/white.png" alt="shoe" />
                                    </li>  
                                                      
                              </ul>
                        </div>

                   </div>
                   <div className="cart__details">
                          <h2>Tide Black</h2>
                          <h5>$39.99</h5>

                          <div className="cart__details__picker mb2">
                                <ul>
                                    <li> 
                                          <img  src="./img/1.png" alt="shoe" />
                                    </li> 
                                    <li> 
                                          <img  src="./img/3.png" alt="shoe" />
                                    </li>
                                    <li> 
                                          <img  src="./img/white.png" alt="shoe" />
                                    </li>
                                    <li> 
                                          <img  src="./img/pink.png" alt="shoe" />
                                    </li> 
                              </ul>                          
                         </div>

                         <p  className="cart__details__selectsize ">Select size</p>
                         <div className="cart__details__size mb2">
                              <button class="cart__details__size-btn">48</button>
                              <button class="cart__details__size-btn">48</button>
                              <button class="cart__details__size-btn">48</button>
                              <button class="cart__details__size-btn">48</button>
                              <button class="cart__details__size-btn">48</button>
                              <button class="cart__details__size-btn">48</button>
                              <button class="cart__details__size-btn">48</button>
                              <button class="cart__details__size-btn">48</button>
                              <button class="cart__details__size-btn">48</button>
                              <button class="cart__details__size-btn">48</button>
                         </div>
                         <div className="cart__details__form">
                              <input
                                     placeholder="Enter Delivery Address"
                                     type="text" 
                                     className="cart__details__form-input mbxs"
                                      name="address" />
                              <button className="mb2">I WANT ONE</button>
                              <h6 className="mb2">Free Delivery within Lagos</h6>
                         </div>
                         <div className="cart__details__social">
                            <ul> 
                                          <li>
                                                <img className="" src="./icon/insta.svg" alt="whiteshoe" />
                                          </li> 
                                          <li>
                                                <img className="" src="./icon/twi.svg" alt="whiteshoe" />
                                          </li> 
                                          <li>
                                                <img className="" src="./icon/fb.svg" alt="whiteshoe" />
                                          </li> 
                          </ul>
                        </div>
                   </div>
               </section>
               <section class="shop-features">
                    <div class="shop-features__imgbox">
                        <img className="" src="./img/feature.jpg" alt="shoe" />
                    </div>
                    <div class="shop-features__textbox">
                          <h1> 
                                <span> STRETCH,</span> LACES, SO YOU ONLY HAVE
                                TO TIE YOUR SHOE ONCE
                         </h1>
                    </div>
               </section>
               <section class="shop-features">
                  <div class="shop-features__textbox">
                          <h1> 
                                <span> A LIGHTWEIGHT FOAM MIDSOLE,</span> DELIVERS
                                CLOUD-LIKE CUSHION.
                         </h1>
                    </div>
                    <div class="shop-features__imgbox">
                        <img className="" src="./img/feature2.jpg" alt="shoe" />
                    </div>
                   
               </section>
             </Fragment>    
       );
}

export default Shop;