document.getElementById("confirm").addEventListener("click", confirm);


function confirm(){
    alert("Your Order is Acceped")

     setTimeout(function(){
         alert("Your order is Begin Prepared")
     },3000)

     setTimeout(function () {
       alert("Your order is Begin Packed");
     }, 8000);

      setTimeout(function () {
        alert("Your order is Out for delivery");
      }, 10000);


       setTimeout(function () {
         alert("Order is delivered");
       }, 12000);
}