import React,{Fragment} from 'react';

const About = () => {
        return (
            <Fragment>
                <section className="shoe">
                       <div class="shoe__box">
                            <img className="shoe__box-item" src="https://res.cloudinary.com/dbif8p032/image/upload/v1591924746/shoe_uj3jzr.png" alt="shoe" />
                       </div>
                       <div class="shoe__desc">
                          <div className="shoe__desc-box">
                              <h2 className="mb2">The best-fitting shoe for everyday</h2>
                              <p className="mb2">
                                 Tide is building the most comfortable shoe for young 
                                 adult in the tech ecosystem in Nigeria.It's an ideal
                                 shoe for the everyday things,running meetings,or any 
                                 outing. We believe in the power of great design and we want 
                                 Tide to be on the feet of people who are pushing the boundaaries
                                 of creativity and building amazing stuff everyday.At Tide, We beleieve
                                 that when you are surrounded by great artwhich in this case is a Tide
                                 on your feet,it can inspire you to be and di better, every day.
                              </p>
                              <h6 className="mb2">We do hope Tide will be part of your creativity journey! </h6>
                          </div>
                       </div>
                       <div className="hire">
                           <div className="hire__box">
                            <h2 className="mb1">We are hiring!</h2>
                                   <p className="mb2">
                                          Become a part of the journey because why not?
                                   </p>
                                   <h6>SALES ASSOCIATE,INVENTORY MANAGER</h6>  
                                   <h6>SOCIAL MEDIA JUNKIE & SOMEONE TO RUN THINGS</h6>  
                                   <p className="mb1">
                                          Because the founders have 9 to 5
                                   </p>
                            </div>   
                       </div>
                       <div className="social">
                              <div className="social__box">
                                     <h2 className="mb1">Tell Your firends about Tide</h2>
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
             </Fragment>      
       );
}
export default About;