const initialPrice=document.querySelector("#initial-price");
var currentPrice=document.querySelector("#current-price");
var noofStocks=document.querySelector("#no-of-stocks");
const tell=document.querySelector("#tell");
const output=document.querySelector("#output");
function profitLoss( )
{
     var ip=initialPrice.value;
     var cp=currentPrice.value;
      var totalStocks=noofStocks.value;
     if(ip>cp)
   {
       var loss=(ip-cp)*totalStocks;
       showMessage("your loss for this trade is  "+loss);
   }  
    else if(cp>ip)
  {
     var profit=(cp-ip)*totalStocks;
     showMessage("your profit for this trade is " +profit);
  }
  else
 {
     showMessage("No gain No Pain,No Pain No gain");
}
 }
 function showMessage(msg)
{
     output.innerHTML=msg;
}
tell.addEventListener('click',profitLoss);
