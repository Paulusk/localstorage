

const newEntry = document.getElementById("newEntry")
const clear = document.getElementById("clearStorage")
let array = ["kiol"]
const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")

//first i need to see, if there is already content within in localstorage
//1.

if(localStorage.length === 0 ) {
    array = []
}else {
    array = JSON.parse(localStorage.getItem("leads"))
    render(array)
    }


function render(leads) {

    for(i=0; i<leads.length; i++) {
        ulEl.innerHTML += `
        <li>
            <a target = '_blank' href='${array[i]}'>
                ${array[i]}
            </a>
        </li>
        `
    }
}

//2. - then, i need to copy that content into an array, or create an empty array

newEntry.addEventListener("click", function() {
    if(inputEl.value != 0){
    array.push(inputEl.value)
    inputEl.value = ""
    localStorage.clear()
    localStorage.setItem("leads", JSON.stringify(array))
    ulEl.innerHTML = ""
    render(array)
    }else{}
    })


clear.addEventListener("dblclick", function(){
    localStorage.clear()
    array = []
    inputEl.value = ""
    ulEl.innerHTML=""
})








