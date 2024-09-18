const Stocks=(props)=>{

    const {stock} = props;
    
    const color = (stock.current_price - stock.previous_price) > 0 ? "bg-green-500 text-white" : "bg-red-500 text-white";
      
      return(
        <div className="flex justify-between items-center bg-stone-100 w-80 h-24 m-12 p-2 shadow-md">
        <div className="leftSide">
          <div className="text-slate-600">{stock.name}</div>
        <div className="text-2xl text-blue-500" >{stock.symbol}</div>
        </div>
    
          <div className="rightSide" >
    
             <div className={`${color} rounded-full px-1 text-sm flex items-center justify-center`}>

      % {(Math.round((stock.current_price - stock.previous_price)*100) / stock.previous_price).toFixed(2)}
    </div>
            <div className="text-2xl text-slate-500" >$ {(stock.current_price/100).toFixed(2)}</div>
          
          </div>
       
    
        
        
        </div>
        
      );
      
    };
    
    export default Stocks;