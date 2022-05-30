// Add the coffee to local storage with key "coffee"

let url = " https://masai-mock-api.herokuapp.com/coffee/menu";

async function getdata(){
    try{
        let res=await  fetch(url)
    let orders=await res.json();
        append(orders.menu.data)
    console.log(orders.menu.data)
    }
    catch(err){
        console.log(err)

    }
}
getdata();

function append(data){
    data.forEach(function(ele){
        let div= document.createElement("div")
        div.setAttribute("class","div")

        let img=document.createElement("img")
        img.src=ele.image

        let title=document.createElement("h3")
        title.innerText= ele.title;

        let price=document.createElement("p")
        price.innerText=ele.price

        let btn=document.createElement("button")
        btn.innerText= "Add To Bucket"
        btn.style.cursor="pointer";
         btn.addEventListener("click",add)
           

        div.append(img,title,price,btn)
        
        
        document.getElementById("menu").append(div)

         function add() {
           let bucketlsdata = JSON.parse(localStorage.getItem("coffee")) || [];

           bucketlsdata.push(ele);
            
           

           


           localStorage.setItem("coffee", JSON.stringify(bucketlsdata));
           window.location.reload();
         }

    
    })
let count=document.getElementById("coffee_count")

   
 


   

}