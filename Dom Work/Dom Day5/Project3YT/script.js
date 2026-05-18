var photo = document.querySelector("#container img");
var love = document.querySelector("#container i");
photo.addEventListener("dblclick", function(){
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    love.style.opacity = '0.8';
    love.style.color = 'red';
    setTimeout(function(){
        love.style.opacity = '0';
    }, 1000);
    setTimeout(function(){
        love.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 3000);
});
var followBtn = document.querySelector("#follow");
var remove = 0
followBtn.addEventListener("click", function(){
    if(remove == 0){
        followBtn.innerHTML = 'Unfollow'
        followBtn.style.backgroundColor = 'red'
        remove = 1
    } else{
        followBtn.innerHTML = 'Follow'
        followBtn.style.backgroundColor = 'blue'
        remove = 0
    }
})