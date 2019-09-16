// // // let images = [
// // //     './img/grey/1.png',
// // //     './img/grey/2.png',
// // //     './img/grey/3.png',
// // //     './img/black/1.png',
// // //     './img/black/2.png',
// // //     './img/black/3.png',
// // //     './img/white/1.png',
// // //     './img/white/2.png',
// // //     './img/white/3.png',
// // //     './img/pink/1.png',
// // //     './img/pink/2.png',
// // //     './img/pink/3.png',
// // //  ];

// // //  const extractColor = (item) => {
// // //     let imgPos = item.indexOf("g") + 1;
// // //     item = item.slice(imgPos);
// // //     imgPos = item.indexOf("/") + 1;
// // //     item = item.slice(imgPos);
// // //     let color = item.split("/")[0];
// // //     return color
// // //  }


// // //  var str =  './img/black/3.png';
// // //  let mainCol = extractColor(str);


// // //  let filtered = images.filter((item,index) => {
// // //        let itemColor = extractColor(item);
// // //        if (itemColor == mainCol) {
// // //            return item
// // //        }
// // //  });

// // //  console.log(filtered);

// // var t = "T611197974123608";

// // const url = 'https://api.paystack.co/transaction/verify/'+encodeURIComponent(t);
// // console.log(url);

// const res =  {  
//     "status":true,
//     "message":"Verification successful",
//     "data":{  
//        "amount":27000,
//        "currency":"NGN",
//        "transaction_date":"2016-10-01T11:03:09.000Z",
//        "status":"success",
//        "reference":"DG4uishudoq90LD",
//        "domain":"test",
//        "metadata":0,
//        "gateway_response":"Successful",
//        "message":null,
//        "channel":"card",
//        "ip_address":"41.1.25.1",
//        "log":{  
//           "time_spent":9,
//           "attempts":1,
//           "authentication":null,
//           "errors":0,
//           "success":true,
//           "mobile":false,
//           "input":[ ],
//           "channel":null,
//           "history":[  
//              {  
//                 "type":"input",
//                 "message":"Filled these fields: card number, card expiry, card cvv",
//                 "time":7
//              },
//              {  
//                 "type":"action",
//                 "message":"Attempted to pay",
//                 "time":7
//              },
//              {  
//                 "type":"success",
//                 "message":"Successfully paid",
//                 "time":8
//              },
//              {  
//                 "type":"close",
//                 "message":"Page closed",
//                 "time":9
//              }
//           ]
//        },
//        "fees":null,
//        "authorization":{  
//           "authorization_code":"AUTH_8dfhjjdt",
//           "card_type":"visa",
//           "last4":"1381",
//           "exp_month":"08",
//           "exp_year":"2018",
//           "bin":"412345",
//           "bank":"TEST BANK",
//           "channel":"card",
//           "reusable":true,
//           "country_code":"NG"
//        },
//        "customer":{  
//           "id":84312,
//           "customer_code":"CUS_hdhye17yj8qd2tx",
//           "first_name":"BoJack",
//           "last_name":"Horseman",
//           "email":"bojack@horseman.com"
//        },
//        "plan":"PLN_0as2m9n02cl0kp6"
//     }
//  }

//  const reference = "fgelpo7934bfiy6";

// const Axios = require("axios");

// let order = {
//     email:res.data.data.customer.email,
//     color:"red",
//     size:47,
//     quantity:2,
//     address:"Ikoyi Lagos",
//     amount:res.data.data.amount,
//     transaction_date:res.data.data.transaction_date,
//     channel:res.data.data.channel,
//     reference:reference
//   }
//   const orderUrl = "http://localhost:5000/api/order";

// //   try {
// //     const response = Axios.get(orderUrl,order);
// //     console.log("order saved succesfully",response);
// //   }catch(err) {
// //     console.log("Error Occurred",err)
// //   }

//   Axios.get(orderUrl,order)
//   .then((response) => {
//       console.log("order saved succesfully");
//   })
//   .catch((err) => {
//        console.log("Error Occurred",err)
//   });

let range = require("./src/utils/range");
 
console.log(range(30,40));

