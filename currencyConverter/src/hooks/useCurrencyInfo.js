import { useEffect,useState } from "react";


function useCurrencyInfo(){

    // it is taking two argument one is call back {} and another is dependencies array [] that means with in a dependencies array if any changes occur it will call the callback function everytime

    useEffect(()=>{
        const [data,setdata] = useState({})
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
        // yaha chai string data lai json ma pathayou
        .then((res)=>res.json())
        // aba feri json lai hamlya data store garna paryo 
        // yaha chai response k ko adhar ma hunxa vanya  hamro currency ko adhar ma 
        .then((res)=>setdata(res[currency]))
        // to check 
        console.log(data);
        // dependency array ma chai currency ko value change vaya sangai call garna paryo soo

    },[currency])
    console.log(data);
    return data


}
export default useCurrencyInfo;