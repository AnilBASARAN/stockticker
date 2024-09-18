import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import {useState,useEffect} from "react";
import Stocks from "./Stocks.jsx";

const App = () => {

const [isLoading,setIsLoading] = useState(true);
const [stocks,setStocks] = useState([]);

  const fetchStocks=()=>{

   setTimeout(()=>{
    fetch("https://api.react-formula.com/learning-api/demos/stocks-project/stocks")
    .then((response)=>response.json())
    .then((data)=>{
      setStocks(data);
      setIsLoading(false);
    })
   },2000)
  };

  // 2 seconds delay

  useEffect(()=>{
    fetchStocks();
  },[])

  const allStocks = stocks.map((ticker,index)=><Stocks stock={ticker} key={index} /> )
  
  return (
    <div className="bg-stone-200 outerContainer flex justify-center min-h-screen" >
    <div className="innerContainer flex justify-center items-center">
      {isLoading?(
        <div className='flex flex-col items-center'>
        <div className='mb-2 text-2xl text-teal-700' >Stocks are loading</div>
        <FontAwesomeIcon icon={faSpinner} className='text-6xl text-teal-400 animate-spin' />
        </div>
        ):(<div>{allStocks}</div>)}
    </div>
  </div>
  );
};

export default App;
