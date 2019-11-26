import React,{Fragment,useState,useEffect} from 'react';

const Shop = () => {  
      
   
   const [allImages,setAllImages] = useState([
      './img/grey/1.png',
      './img/grey/2.png',
      './img/grey/3.png',
      './img/black/1.png',
      './img/black/2.png',
      './img/black/3.png',
      './img/pink/1.png',
      './img/pink/2.png',
      './img/pink/3.png',
      './img/white/1.png',
      './img/white/2.png',
      './img/white/3.png'
   ]);

   const [size,setSize] = useState([
      30,31,32,33,34,35,36,37,38,39
   ]);
   const [chosenSize,setChosenSize] = useState(size[0]);
   const [quantity,setQuantity] = useState(1);
   const [pickerList,setPickerList] = useState([]);
   const [order,setOrder] = useState({
         email:'',
         color:'',
         size:0,
         quantity:'',
         address:'lagosByDefault',
         amount:0,
         transaction:'',
         channel:'',
         reference:''
   });
   let newQuantity;

   const extractColor = (item) => {
      let imgPos = item.indexOf("g") + 1;
      item = item.slice(imgPos);
      imgPos = item.indexOf("/") + 1;
      item = item.slice(imgPos);
      let color = item.split("/")[0];
      return color;
   };

   const initialImg= allImages[0];
   const initialColor = extractColor(initialImg);
   let imgArray = allImages.filter((item,index) => {
      let itemColor = extractColor(item);
      if (itemColor == initialColor) {
          return item;
      }
   });

    
   useEffect(() => {
      setPickerList(imgArray);
   },[]);

  

   const changeImg = (event) => {
      const mainBg = document.querySelector('.cart__main__item-img');
      const picker = document.querySelectorAll(".cart__main__picker__item-img");
      const element = event.target;
      const newImgSrc = element.src;
      const alt = element.alt;
     
      picker.forEach((item,index) => {       
           if(index == alt) {
              mainBg.src = newImgSrc;
              item.parentNode.classList.add('grayborder');
           }else {
              item.parentNode.classList.remove('grayborder');
           }  
      });
   }

   const changeImgList = (event) => {
      const detailsPicker = document.querySelectorAll(".cart__details__picker__item-img");
      const element = event.target;
      const alt = element.getAttribute("data-item");


      detailsPicker.forEach((item,index) => {       
            if(index == alt) {
                  let color = extractColor(event.target.src);
                  imgArray = allImages.filter((item,index) => {
                        let itemColor = extractColor(item);
                        if (itemColor === color) {
                            return item
                        }
                  });
                  setPickerList(imgArray);
                  item.parentNode.classList.add('grayborder');
            }else {
               item.parentNode.classList.remove('grayborder');
            }  
       });   
   };

   const pickSize = (e) => {
         e.preventDefault();
         let newSize = e.target.childNodes[0].nodeValue;
         const sizeButton = document.querySelectorAll(".cart__details__size-btn");
         sizeButton.forEach((item,index) => {
            let itemSize = item.childNodes[0].nodeValue
            if (itemSize === newSize) {
               item.style.border="3px solid #898a95";
            }else {
              item.style.border="1px solid #ebebeb";
            }
         });
         setChosenSize(newSize);
   }

   const increaseQuantity = (e) => {
        newQuantity = quantity + 1;
        setQuantity(newQuantity);
   }

   const decreaseQuantity = (e) => {
      newQuantity = quantity - 1;
      if(newQuantity < 1) {
          setQuantity(1);
      }else {
          setQuantity(newQuantity);
      }
   }

   const getAddress = (e) => {
      console.log(e.target.value);
      setOrder({
            email:'',
            color:'',
            size:0,
            quantity:'',
            address:e.target.value,
            amount:0,
            transaction:'',
            channel:'',
            reference:''
      });
   }
   const callPayStack = ()  => {
        console.log("PayStack Called"); 
   }



      return (
            <Fragment>
               <section className="cart">
                   <div className="cart__main">
                        <div className="cart__main__item">
                           <img className="cart__main__item-img" src={pickerList[0]} alt="shoe" /> 
                        </div>
                        <div className="cart__main__picker">
                              <ul >
                                    {
                                      pickerList.map((item,index) => {
                                          return <li key={index}>
                                                <img 
                                                    onClick={changeImg}
                                                    className="cart__main__picker__item-img" 
                                                    src={item}
                                                    alt={index}  />
                                          </li>
                                      })
                                    }                 
                              </ul>
                        </div>
                   </div>
                   <div className="cart__details">
                          <h2>Tide Black</h2>
                          <h5>$39.99</h5>
                          

                          <div className="cart__details__picker mb2">
                                <ul>
                                    <li> 
                                        <img  className="cart__details__picker__item-img" data-item="0" onClick={changeImgList} src={allImages[0]} alt="grey" />
                                    </li> 
                                    <li> 
                                          <img className="cart__details__picker__item-img" data-item="1" onClick={changeImgList} src={allImages[3]} alt="black" />
                                    </li>
                                    <li> 
                                          <img className="cart__details__picker__item-img" data-item="2" onClick={changeImgList} src={allImages[6]} alt="pink" />
                                    </li>
                                    <li> 
                                          <img className="cart__details__picker__item-img" data-item="3" onClick={changeImgList}  src={allImages[9]} alt="white" />
                                    </li> 
                              </ul>                          
                         </div>



                         <p  className="cart__details__selectsize ">Select size</p>
                         <div className="cart__details__size  mb2">{
                                    size.map((siz,index) => {
                                       return <button 
                                                key={index}
                                                className="cart__details__size-btn"
                                                onClick={pickSize}>
                                                {siz}
                                          </button>
                                    })
                              }
                         </div>
                         <div className="cart__details__quantity mb2">
                               <button onClick={decreaseQuantity} >-</button>
                               <p>{quantity}</p>
                               <button  onClick={increaseQuantity}>+</button>
                         </div>

                         <div className="cart__details__form">
                              <input
                                     placeholder="Enter Delivery Address"
                                     type="text" 
                                     className="cart__details__form-input mbxs"
                                     name="address"
                                     onChange={getAddress} />
                              <button
                                     onClick={callPayStack}
                                     className="mb2">I WANT ONE</button>
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
               <section className="shop-features">
                    <div className="shop-features__imgbox">
                        <img className="" src="./img/feature.jpg" alt="shoe" />
                    </div>
                    <div className="shop-features__textbox">
                          <h1> 
                                <span> STRETCH,</span> LACES, SO YOU ONLY HAVE
                                TO TIE YOUR SHOE ONCE
                         </h1>
                    </div>
               </section>
               <section className="shop-features">
                  <div className="shop-features__textbox">
                          <h1> 
                                <span> A LIGHTWEIGHT FOAM MIDSOLE,</span> DELIVERS
                                CLOUD-LIKE CUSHION.
                         </h1>
                    </div>
                    <div className="shop-features__imgbox">
                        <img className="" src="./img/feature2.jpg" alt="shoe" />
                    </div>
                   
               </section>
             </Fragment>    
       );
}

export default Shop;