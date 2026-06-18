var allELem = document.querySelectorAll('.elem');
var fullElemPage = document.querySelectorAll('.fullElem');
var fullElemPageBack = document.querySelectorAll('.fullElem .back');
allELem.forEach(function(elem){
    elem.addEventListener('click',function(){
        fullElemPage[elem.id].style.display = 'block'
    })
})
fullElemPageBack.forEach(function(back){
    back.addEventListener('click',function(){
        fullElemPage[back.id].style.display = 'none'
    })
    
})