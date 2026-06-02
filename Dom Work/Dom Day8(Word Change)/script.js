const para = document.querySelector("p")
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

let iteration = 0

function changeText() {
    const str= text.split("").map((char,index)=>{
            if(index < iteration) {
                return char
            }
        return character.split("")[Math.floor(Math.random()*52)]
        }).join("")
        para.innerText = str
    
        iteration += 0.2
}
setInterval(changeText,30)