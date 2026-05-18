var add= document.getElementById('follow')
var remove = 0

add.addEventListener('click', function(){
    if(remove == 0){
        add.innerHTML = 'Unfollow'
        add.style.backgroundColor = 'red'
        remove = 1
    }else{
        add.innerHTML = 'Follow'
        add.style.backgroundColor = 'blue'
        remove = 0
    }
})