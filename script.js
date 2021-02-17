let kitchenlist=document.getElementById("kitchen-items-list");
let curryPowder=["salt", "pepper", "chilli", "turmeric"];

//for( let powder of curryPowder){
  //  let li=document.createElement("li");
    //li.innerText=powder;
    //kitchenlist.appendChild(li);
    //
    //console.log(li);

//}
curryPowder.forEach(function(powder){
    let li=document.createElement("li");
    li.innerHTML=powder;
    kitchenlist.appendChild(li);
}) 