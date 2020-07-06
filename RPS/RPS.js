var img = document.querySelectorAll("img");
var h12 = document.querySelector("#h12");
var userscore = 0;
var compscore = 0;
var s1 = document.querySelector("#s1")
var s3 = document.querySelector("#s3")
var R = document.querySelector("#i1");
var P = document.querySelector("#i2");
var S = document.querySelector("#i3");
var rock = document.querySelector("#hands1");
var paper = document.querySelector("#hands2");
var sci = document.querySelector("#hands3");
var choice = ['Rock','Paper','Scissor'];
var inpvalue = 10;



function win(userch,compchoice,which1){
    var audio = new Audio('success.mp3');
    audio.play();
    userscore++;
    
    s1.textContent = userscore;
    h12.textContent = "Your "+userch+" Beats Comp's "+compchoice;
    if(userch == 'Rock'){
        R.classList.add(which1);
        setTimeout(function(){
            R.classList.remove(which1)
        },400)
    }
    if(userch == 'Paper'){
        P.classList.add(which1);
        setTimeout(function(){
            P.classList.remove(which1)
        },400)

    }
    if(userch == "Scissor"){
        S.classList.add(which1)
        setTimeout(function(){
            S.classList.remove(which1)
        },400)
    }

}

function lose(userch,compchoice,which2){
    var audio = new Audio('fail.mp3');
    audio.play();
    compscore++;
    s3.textContent = compscore;
h12.textContent = ("Your "+userch+" Got Beat Up By Comp's "+compchoice);

if(userch == 'Rock'){
R.classList.add(which2);
setTimeout(function(){
    R.classList.remove(which2)
},400)
}

if(userch == 'Paper'){
P.classList.add(which2);
setTimeout(function(){
    P.classList.remove(which2)
},400)
}
if(userch == "Scissor"){
S.classList.add(which2)
setTimeout(function(){
    S.classList.remove(which2)
},400)
}
}

function draw(userch,compchoice,which3){
    var audio = new Audio('draw.mp3');
    audio.play();
h12.textContent = ("Its a Draw between Your "+userch+" and Comp's "+compchoice);
if(userch == 'Rock'){
R.classList.add(which3);
setTimeout(function(){
    R.classList.remove(which3)
},400)
}


if(userch == 'Paper'){
P.classList.add(which3);
setTimeout(function(){
    P.classList.remove(which3)
},400)
}

if(userch == "Scissor"){
S.classList.add(which3)
setTimeout(function(){
    S.classList.remove(which3)
},400)
}
}

function game(userchoice){

    var compchoice = Comp();
    var userch = userchoice;
    switch(userch + compchoice){

        case"RockScissor":
        case"ScissorPaper":
        case"PaperRock":
        win(userch,compchoice,'i1');
        break;
        
        case"ScissorPaper":
        case"PaperScissor":
        case"RockPaper":
        lose(userch,compchoice,'i2');
        break;
        
        case"ScissorScissor":
        case"RockRock":
        case"PaperPaper":
        draw(userch,compchoice,'i3');
        break;
        
    }

}


function main(){

 R.addEventListener("click",function(){

   
    game('Rock')
});

P.addEventListener("click",function(){
   
    game('Paper')
});

S.addEventListener("click",function(){
    
    game('Scissor')
});

}
main();

function Comp()
{
return choice[Math.floor(Math.random()*img.length)];
}
