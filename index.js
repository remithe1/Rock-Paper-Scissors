function paperFunction(){
var computerChoice= Math.floor((Math.random()*3)+1); 

if(computerChoice ==3){
document.querySelector("h1").innerHTML="You Won"
document.getElementsByClassName("img1")[0].src="images/paper.jfif"
document.getElementsByClassName("img2")[0].src="images/rock.jpg"
}
else if(computerChoice ==2){
document.querySelector("h1").innerHTML="it is a Tie"
document.getElementsByClassName("img1")[0].src="images/paper.jfif"
document.getElementsByClassName("img2")[0].src="images/paper.jfif"
}
else if(computerChoice ==1){
document.querySelector("h1").innerHTML="You Lost"
document.getElementsByClassName("img1")[0].src="images/paper.jfif"
document.getElementsByClassName("img2")[0].src="images/scissors.jpg"
}
}
function rockFunction(){
var computerChoice= Math.floor((Math.random()*3)+1); 
if(computerChoice==3){
document.querySelector("h1").innerHTML="it is a Tie"
document.getElementsByClassName("img1")[0].src="images/rock.jpg"
document.getElementsByClassName("img2")[0].src="images/rock.jpg"
}
else if(computerChoice==2){
document.querySelector("h1").innerHTML="You Lost"
document.getElementsByClassName("img1")[0].src="images/rock.jpg"
document.getElementsByClassName("img2")[0].src="images/paper.jfif"
}
else if(computerChoice==1){
document.querySelector("h1").innerHTML="You Won"
document.getElementsByClassName("img1")[0].src="images/rock.jpg"
document.getElementsByClassName("img2")[0].src="images/scissors.jpg"
}
}
function scissorsFunction(){
var computerChoice= Math.floor((Math.random()*3)+1); 
if(computerChoice==3){
document.querySelector("h1").innerHTML="You Lost"
document.getElementsByClassName("img1")[0].src="images/scissors.jpg"
document.getElementsByClassName("img2")[0].src="images/rock.jpg"
}
else if(computerChoice==2){
document.querySelector("h1").innerHTML="You Won"
document.getElementsByClassName("img1")[0].src="images/scissors.jpg"
document.getElementsByClassName("img2")[0].src="images/paper.jfif"
}
else if(computerChoice==1){
document.querySelector("h1").innerHTML="it is a tie"
document.getElementsByClassName("img1")[0].src="images/scissors.jpg"
document.getElementsByClassName("img2")[0].src="images/scissors.jpg"
}
}