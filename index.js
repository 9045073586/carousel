var flag=2;
var slides;
function toShowNextImage(x){
    flag=flag+x;
    if(flag==slides.length){
        flag=0;
        num=0;
    }
    if(flag<0){
   flag=slides.length-1;
   num=slides.length
    }
    slideShow(flag);
}
function slideShow (num){
 slides=document.getElementsByClassName("slides");
   console.log(slides);
   for(let y of slides){
    y.style.display="none";
   }
   slides[num].style.display = "block";
}
slideShow(flag);