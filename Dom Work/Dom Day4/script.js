var  grow = 0;
var btn =document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')

btn.addEventListener('click',function(){
   var int = setInterval(function(){
    grow++;
    h2.innerHTML = grow +'%';
    inner.style.width = grow + '%';
   },50);
   setTimeout(function(){
    clearInterval(int);
    btn.innerHTML = 'Downloaded';
    btn.style.opacity = '0.5';
    btn.disabled = true;
   },5000)
});