const Stocks=(props)=>{

    const {stock} = props;
    
    const color = (stock.current_price - stock.previous_price) > 0 ? "text-green-400" : "text-red-400";
      
      return(
        <div className="flex flex-col bg-stone-100 m-12 p-2 shadow-md w-48 h-28">
        <div></div>
        <div className={color}>
      {(Math.round((stock.current_price - stock.previous_price) * 1000) / 1000 / stock.current_price).toFixed(3)}
    </div>
    
        <div>{stock.name}</div>
        <div>ticker: {stock.symbol}</div>
        
        </div>
        
      );
      
    };
    
    export default Stocks;