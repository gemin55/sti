//create array imgArray to store the 4 images 
const imgArray = ["img/advert1.jpg","img/advert2.jpg","img/advert3.jpg","img/advert4.jpg", "img/jumbotron.jpg" ];

//set an index counter to zero
let index = 0;

function doNext()
{
//verify if it’s not the last image
if (index < 4) {
    index++;
//assign the imgarray to the slideshow image
document.getElementById("slideshow").src = imgArray[index];
console.log(index);
}
else{
    index = -1;
//restart the doNext()
doNext();
}
}

//create the doBack() function
function doBack()
{
//verify if it’s not the last image
if (index > 0) {
    index--;
//assign the imgarray to the slideshow image
document.getElementById("slideshow").src = imgArray[index];
console.log(index);

}
else{
    index = 5;
//restart the doNext()
doBack();
}
}

//create the jump() function
function jump(x)
{

document.getElementById("slideshow").src = imgArray[x];

}
//create function run() and 
//invoke the function doNext() every 3 seconds
let timer;
function start(){
     timer = setInterval(doNext, 3000);
}

//invoke the run() once the page loads
window.addEventListener("load", start);
//create function stop() to stop the timer
function stop(){
    clearInterval(timer);
}

//search for the ss-container and add listeners to detect mouse event
const cont = document.getElementById("ss-container");
cont.addEventListener("mouseover", stop);
cont.addEventListener("mouseout", start);


