var container = document.querySelector('#container')
var cursur = document.querySelector('#cursor')

container.addEventListener("mousemove", function (dets) {
    cursur.style.left = dets.x + "px"
    cursur.style.top = dets.y + "px"
})