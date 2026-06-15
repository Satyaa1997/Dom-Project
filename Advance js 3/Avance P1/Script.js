let desktop = document.querySelector(".desktop")

let menu = document.createElement("div")

menu.innerHTML = `
    <p>Refresh</p>
    <ul>
        <li>Short</li>
        <li>By Type</li>
        <li>By Size</li>
        <li>By File</li>
    </ul>
    <p>View</p>
    <p>New</p>
`;
menu.style.display = "none";
menu.style.position = "absolute";
menu.style.background = "white";
menu.style.width ="150px";
menu.style.padding = "10px";
menu.style.boxShadow = "0 0 10px black";
document.body.appendChild(menu);

desktop.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    menu.style.display = "block";

    menu.style.left = e.clientX + "px";
    menu.style.top = e.clientY + "px";
});

document.addEventListener("click",()=>{

    menu.style.display = "none";

});

// start click //

let startBtn = document.querySelector(".start-btn");

let startMenu = document.querySelector(".start-menu");



startBtn.addEventListener("click",()=>{


    if(startMenu.style.display === "block"){

        startMenu.style.display = "none";

    }
    else{

        startMenu.style.display = "block";

    }


});