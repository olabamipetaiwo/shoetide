import React,{Fragment,useState,useEffect} from 'react';
import PaystackButton from 'react-paystack';
import setApiKey from '../utils/setKey';
import axios from "axios";

//axios Set up
const Axios = axios.create({
  headers: {
      'authorization': 'Bearer sk_test_2b2f5c6791fcd691dea21ff6744f3574d9d118b7',
      'content-type': 'application/json',
      'cache-control': 'no-cache' 
  }
});

const Shop = () => {  

      const [key,setKey] = useState('pk_test_1771fed1ba0e4e970c7b98c266d2eb190959ad87');
      const [clientEmail,setClientEmail] = useState('teeola48@gmail.com');
      const [charged,setCharged] = useState(false);
      const [reference,setReference] = useState();
      const amount = 10000;//equals NGN100,
      
      useEffect(() => {
            if(charged) {
               getReference(reference);
            }  
        },[reference]);

        const callback = (response) => {
            // card charged successfully, get reference here
            if(response.status === "success") {
                setCharged(true);
                setReference(response.reference);
            }else {
               close()
            }   
        }

        const close = () => {
            console.log("Payment closed");
        }

const getReference = async () => {
    setApiKey(key);

    console.log("Verifying payment for id:",reference);
    const url = 'https://api.paystack.co/transaction/verify/'+encodeURIComponent(reference);

      Axios.get(url)
      .then((res) => {
        console.log("Response gooten from Paystack is: ", res);
            let order = {
              email:res.data.data.customer.email,
              color:"red",
              size:47,
              quantity:2,
              address:"Ikoyi Lagos",
              amount:res.data.data.amount,
              transaction_date:res.data.data.transaction_date,
              channel:res.data.data.channel,
              reference:reference
            }
            console.log(order);
            const orderUrl = "http://localhost:5000/api/order/";
            Axios.get(orderUrl,order)
            .then((response) => {
                console.log("order saved succesfully");
            })
            .catch((err) => {
                console.log(err,"Error Ocured ",err.message);
            });
      })
      .catch((err) => {
        console.log(err,"Error Ocured ",err.message);
      }); 
}
        

   const [allImages,setAllImages] = useState([
     'https://res.cloudinary.com/dbif8p032/image/upload/v1591926769/img/pink/3.png',
     'https://res.cloudinary.com/dbif8p032/image/upload/v1591926768/img/pink/1.png',
     'https://res.cloudinary.com/dbif8p032/image/upload/v1591926767/img/pink/2.png',
     'https://res.cloudinary.com/dbif8p032/image/upload/v1591926724/img/black/3.png',
     'https://res.cloudinary.com/dbif8p032/image/upload/v1591926723/img/black/1.png',
     'https://res.cloudinary.com/dbif8p032/image/upload/v1591926724/img/black/2.png',
     'https://res.cloudinary.com/dbif8p032/image/upload/v1591926744/img/grey/3.png',
     'https://res.cloudinary.com/dbif8p032/image/upload/v1591926743/img/grey/1.png',
     'https://res.cloudinary.com/dbif8p032/image/upload/v1591926743/img/grey/2.png',
     'https://res.cloudinary.com/dbif8p032/image/upload/v1591926585/img/white/3.png',
     'https://res.cloudinary.com/dbif8p032/image/upload/v1591926585/img/white/1.png',
     'https://res.cloudinary.com/dbif8p032/image/upload/v1591926585/img/white/2.png'
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
      let imgPos = item.indexOf("img") + 1;
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
                              {/* <button
                                     onClick={callPayStack}
                                     className="mb2">I WANT ONE</button> */}
                               <PaystackButton
                                          text="I WANT ONE"
                                          className="payButton button"
                                          callback={callback}
                                          close={close}
                                          disabled={false} 
                                          embed={false}
                                          email={clientEmail}
                                          amount={amount}
                                          paystackkey={key}
                                          tag="button"
                              />
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
                      <img className="" src="https://res.cloudinary.com/dbif8p032/image/upload/v1591924783/feature_eo6aua.jpg" alt="shoe" />
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
                        <img className="" src="https://res.cloudinary.com/dbif8p032/image/upload/v1591924764/feature2_lzv4al.jpg" alt="shoe" />
                    </div>
                   
               </section>
             </Fragment>    
       );
}

export default Shop;