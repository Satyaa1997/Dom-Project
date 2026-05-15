let arr=[
    {
        Team:"CSK",
        PrimaryColor:"Yellow",
        SecondaryColor:"Blue"
    },
    {
        Team:"PBKS",
        PrimaryColor:"Crimson",
        SecondaryColor:"Golden"
    },
    {
        Team:"MI",
        PrimaryColor:"Blue",
        SecondaryColor:"Wheat"
    },
    {
        Team:"RCB",
        PrimaryColor:"Maroon",
        SecondaryColor:"gray"
    }

]

var main = document.querySelector('main')
var h1 = document.querySelector('#box')
var button = document.querySelector('button')
button.addEventListener('click', function(){
    let Winner =arr[Math.floor( Math.random()*arr.length)]
    
    h1.innerHTML= Winner.Team
    h1.style.backgroundColor=Winner.SecondaryColor
    main.style.backgroundColor=Winner.PrimaryColor
})