var sq  = document.getElementsByClassName("square");

var DisColor = document.querySelector("#Display");
var h1 = document.querySelector("h1");
var allh1 = document.querySelector("#h1");
allh1.style.background = " #4682B4";
var msg = document.querySelector("#msg");
var reset = document.querySelector("button")
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")
var numberScore = 15;
var colors = [];
var generateColor = genColor(numberScore)
function genColor(numberScore){

    for(var k=0;k<numberScore;k++){

        randomColors();
        colors.push(randomColors());

    }

}






easy.addEventListener("click",function(){

    msg.textContent = ""
easy.classList.add("selector")
hard.classList.remove("selector")
colors = []
numberScore = 9
generateColor  = genColor(numberScore);

pickedColor = PickColor();
DisColor.textContent = pickedColor;


    for(var l=0;l<sq.length;l++){
        if(colors[l]){
        sq[l].style.background = colors[l];
        }
    
    else{
   sq[l].style.background = "none"
        }
        }

})

hard.addEventListener("click",function(){
    
msg.textContent = ""
hard.classList.add("selector")
easy.classList.remove("selector")
colors = []
numberScore = 15;
generateColor  = genColor(numberScore);

pickedColor = PickColor();
DisColor.textContent = pickedColor;


    for(var l=0;l<sq.length;l++){
        if(colors[l]){
        sq[l].style.background = colors[l];
        }
    
    else{
   sq[l].style.background = "#232323"
        }
        }

})










var pickedColor = PickColor();
    DisColor.textContent = pickedColor;
DisColor.style.color = "White"

function PickColor(){
    var Mrand = Math.floor(Math.random()*colors.length);
    return colors[Mrand];
    }

for(var i=0;i<sq.length;i++)
{
    sq[i].style.background = colors[i];


    sq[i].addEventListener("click",function(){
    
        var clickedColor = this.style.background;
        if(pickedColor == clickedColor)
            ChangeColor()
        else{
            
            this.style.background = "#232323"
            msg.textContent  = "Try Again";
        }
    })

}

function ChangeColor(){
    
    for(var j=0;j<numberScore;j++)
    {
    sq[j].style.background = pickedColor;
    }
    allh1.style.backgroundColor = pickedColor;
    msg.textContent = "Correct!";
}


function randomColors(){
    
    var r =  Math.floor(Math.random()*256);
    var g =  Math.floor(Math.random()*256);
    var b =  Math.floor(Math.random()*256);

   return "rgb("+ r+", "+ g+", " + b+")";
  
}

reset.addEventListener("click",function(){
    allh1.style.background =  "#4682B4";
   colors = [];

   
       var generateColor = genColor(numberScore);
    
pickedColor = PickColor();
DisColor.textContent = pickedColor;
DisColor.style.color = "White";
    for(var k=0;k<sq.length;k++)
    {
        sq[k].style.background = colors[k];
    
    
        sq[k].addEventListener("click",function(){
    
            var clickedColor = this.style.background;
            
            if(pickedColor == clickedColor)
                ChangeColor()
            else{
                
                this.style.background = "#232323"
                msg.textContent  = "Try Again";
            }
        })
    
    }
msg.textContent = ""
allh1.style.background = " #4682B4"

});