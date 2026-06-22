function openFeatures() {
    var allELem = document.querySelectorAll('.elem');
    var fullElemPage = document.querySelectorAll('.fullElem');
    var fullElemPageBack = document.querySelectorAll('.fullElem .back');
    allELem.forEach(function (elem) {
        elem.addEventListener('click', function () {
            fullElemPage[elem.id].style.display = 'block'
        })
    })
    fullElemPageBack.forEach(function (back) {
        back.addEventListener('click', function () {
            fullElemPage[back.id].style.display = 'none'
        })

    })
}
//openFeatures();
let form = document.querySelector('.addTask form')
let taskInput = document.querySelector('.addTask form #task-input')
let taskDetailInput = document.querySelector('.addTask form textarea')
let taskcheckBox = document.querySelector('.addTask form #check')

let currentTask = [
    {
        task:'Mandir Jao',
        details:'Hanumaan ji ke',
        imp:true
    },
     {
        task:'Gym Jao',
        details:'Chest Day',
        imp:true
    },
     {
        task:'khana Khao',
        details:'Panir Puri',
        imp:false
    }
]

// form.addEventListener('submit',function(e){
// e.preventDefault()
// console.log(taskInput.value);
// console.log(taskDetailInput.value);
// console.log(taskcheckBox.checked);
// })

var allTask = document.querySelector('.allTask')

var sum = ''

currentTask.forEach(function(elem){
    sum = sum + `  <div class="task">
                    <h5>${elem.task}<span class=${elem.imp}></span></h5>
                    <button>Mark As Complete</button>
                </div>`
})
allTask.innerHTML = sum