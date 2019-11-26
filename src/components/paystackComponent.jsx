import React, { useEffect ,useState} from 'react';
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

const Paystack = () => {

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
        return (
          <div>
            <p>
              <PaystackButton
                text="Make Payment"
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
            </p>
          </div>
        );
      }

    export default Paystack;