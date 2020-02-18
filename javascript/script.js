let draw = document.getElementsByClassName("draw");
let screenSizeHeight = (window.innerHeight - 230)  /6;
let screenSizeWidth = (window.innerWidth - 85) / 6;



 for (i=0; i < screenSizeHeight; i++){
    for(x=0; x < screenSizeWidth; x++){
    let circle = document.createElement("div");
    circle.className = "blank";
    draw[0].appendChild(circle); 
    }
} 

var pixels = document.getElementsByClassName("blank"); 

    for (let index = 0; index < pixels.length; index++) {
        pixel = pixels[index];
        pixels[index].addEventListener('mouseenter', drawEvent);
        
    }


    var mouseDown;
    document.body.onmousedown = function() { 
      mouseDown = true;
    }
    document.body.onmouseup = function() {
      mouseDown= false;
    }


    var colorSelect = document.getElementById('selectColor');
    var colorSelected = colorSelect.value;
    colorSelect.addEventListener("input",setColor);

    function setColor(){
        colorSelected = colorSelect.value;
    }

function drawEvent(){
 console.log("2");
 if(mouseDown){
 this.style.backgroundColor = colorSelected;
 }
}




    

 