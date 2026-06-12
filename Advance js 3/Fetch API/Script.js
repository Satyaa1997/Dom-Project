function getUser(){
    document.querySelector(".user").innerHTML = "";
    fetch("https://randomuser.me/api/?results=3")
.then((raw)=> raw.json())
.then((data)=>{
    data.results.forEach(function(userData){
       const container = document.querySelector(".user");



let card = document.createElement("div");
card.className = "bg-gray-800 rounded-lg shadow-lg p-6 w-80";



let imgBox = document.createElement("div");
imgBox.className = "flex justify-center mb-4";


let img = document.createElement("img");
img.className = "h-24 w-24 rounded-full object-cover border-4 border-blue-500";
img.src = userData.picture.large;
img.alt = "User Avatar";

imgBox.appendChild(img);


let name = document.createElement("h2");
name.className = "text-2xl font-bold text-center text-white mb-2";
name.innerText = userData.name.first+ " " + userData.name.last;


let role = document.createElement("p");
role.className = "text-center text-gray-300 mb-4";
role.innerText =userData.phone;


let about = document.createElement("p");
about.className = "text-center text-gray-400 text-sm mb-6";
about.innerText = userData.email;



let btnBox = document.createElement("div");
btnBox.className = "flex gap-2 justify-center";


let follow = document.createElement("button");
follow.className = "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded";
follow.innerText = "Follow";


let message = document.createElement("button");
message.className = "bg-gray-700 hover:bg-gray-600 text-gray-100 font-semibold py-2 px-4 rounded";
message.innerText = "Message";


btnBox.appendChild(follow);
btnBox.appendChild(message);


card.appendChild(imgBox);
card.appendChild(name);
card.appendChild(role);
card.appendChild(about);
card.appendChild(btnBox);


container.appendChild(card);
        
    })
})
}
getUser();
document.querySelector("#refreshBtn")
.addEventListener("click", function(){
   getUser();
})