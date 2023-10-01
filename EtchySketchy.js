let area=document.querySelector(".area");

function clearGrid() {
    while (area.firstChild) {
      area.removeChild(area.firstChild);
    }
  }
function for2(){
    clearGrid();
    for(let i=0;i<4;i++){
    area.appendChild(document.createElement("button"));
    }
    let areaChildren=area.children;
    for(let j=0;j<areaChildren.length;j++){
    areaChildren[j].classList.add("for2");
}
   for(let k=0;k<areaChildren.length;k++){
     areaChildren[k].addEventListener("mouseover",colorBlack);
   }
   function colorBlack(event){
   event.target.style.backgroundColor = "black";
}
}


function for4(){
    clearGrid();
       for(let i=0;i<16;i++){
        area.appendChild(document.createElement("button"));
        }
        let areaChildren=area.children;
        for(let j=0;j<areaChildren.length;j++){
        areaChildren[j].classList.add("for4");
    }
       for(let k=0;k<areaChildren.length;k++){
         areaChildren[k].addEventListener("mouseover",colorBlack);
       }
       function colorBlack(event){
       event.target.style.backgroundColor = "black";
    }
    }
    

function for8(){
    clearGrid();
    for(let i=0;i<64;i++){
        area.appendChild(document.createElement("button"));
        }
        let areaChildren=area.children;
        for(let j=0;j<areaChildren.length;j++){
        areaChildren[j].classList.add("for8");
    }
       for(let k=0;k<areaChildren.length;k++){
         areaChildren[k].addEventListener("mouseover",colorBlack);
       }
       function colorBlack(event){
       event.target.style.backgroundColor = "black";
    }
    }
    

 function for16(){
    clearGrid();
        for(let i=0;i<256;i++){
            area.appendChild(document.createElement("button"));
            }
            let areaChildren=area.children;
            for(let j=0;j<areaChildren.length;j++){
            areaChildren[j].classList.add("for16");
        }
           for(let k=0;k<areaChildren.length;k++){
             areaChildren[k].addEventListener("mouseover",colorBlack);
           }
           function colorBlack(event){
           event.target.style.backgroundColor = "black";
        }
        }
        

function for32(){
    clearGrid();
for(let i=0;i<1024;i++){
    area.appendChild(document.createElement("button"));
    }
    let areaChildren=area.children;
    for(let j=0;j<areaChildren.length;j++){
    areaChildren[j].classList.add("for32");
}
   for(let k=0;k<areaChildren.length;k++){
     areaChildren[k].addEventListener("mouseover",colorBlack);
   }
   function colorBlack(event){
   event.target.style.backgroundColor = "black";
}
}

let buttonFor2=document.querySelector(".sizeChildren1");
buttonFor2.addEventListener("click",for2);

let buttonFor4=document.querySelector(".sizeChildren2");
buttonFor4.addEventListener("click",for4);

let buttonFor8=document.querySelector(".sizeChildren3");
buttonFor8.addEventListener("click",for8);

let buttonFor16=document.querySelector(".sizeChildren4");
buttonFor16.addEventListener("click",for16);

let buttonFor32=document.querySelector(".sizeChildren5");
buttonFor32.addEventListener("click",for32);



