// On clicking remove button the item should be removed from DOM as well as localstorage.
var list=JSON.parse(localStorage.getItem("coffee")) || []


    list.forEach(function(ele,index){
        let div=document.createElement("div")
        div.setAttribute("class","div")

        let img=document.createElement("img")
        img.src=ele.image;


       let title = document.createElement("h3");
       title.innerText = ele.title;


        let price = document.createElement("p");
        price.innerText = ele.price;
        

        var btn=document.createElement("button")
        btn.innerText="Remove"
        btn.addEventListener("click",function(){
            remove(ele,index)
        })
        
            
        


        div.append(img,title,price,btn)

        document.getElementById("bucket").append(div)

    })
     function remove(ele, index) {
       list.splice(index, 1);

       localStorage.setItem("coffee", JSON.stringify(list));
       window.location.reload();
     }
          
    

    


    

