var arr = [
    {dp:"https://plus.unsplash.com/premium_photo-1712736395790-dafc5a950401?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     story:"https://images.unsplash.com/photo-1778648185595-6cab6bbd355a?q=80&w=777&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {dp:"https://images.unsplash.com/photo-1779049966030-21d2d918a092?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1773332611476-6ec2ba68049f?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {dp:"https://images.unsplash.com/photo-1773332589460-5a5d43c80f5b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     story:"https://plus.unsplash.com/premium_photo-1777559749537-f642cac0ec1a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {dp:"https://images.unsplash.com/photo-1778403283539-9e67927cfda2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     story:"https://images.unsplash.com/photo-1777997829741-07c88ed5bcbd?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    
]

var storiya = document.querySelector('#storiya')
var clutter = ""
arr.forEach(function(elem,idx){
   clutter += `<div id="story">
            <img id="${idx}" src="${elem.dp}" alt="">
        </div>`
})
storiya.innerHTML = clutter
storiya.addEventListener("click", function(dets){

    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display ="none"
    },3000)
});
