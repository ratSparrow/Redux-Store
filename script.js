const incrementEl = document.getElementById("increment")
const decrementEl = document.getElementById("decrement")
const counter = document.getElementById("counter")

let count = 0

incrementEl.addEventListener('click',()=>{
    count++
    counter.innerText = count
})
decrementEl.addEventListener('click',()=>{
    count--
    counter.innerText = count
})
