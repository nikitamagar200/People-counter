let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(saveEl)
console.log(countEl)

let count = 0

function increment() {
    count = count + 1
   countEl.innerText = count
}

function save() {
    let countStr = count + "-"
    saveEl.textContent += countStr
    console.log(count)
    countEl.innerText =0
    count=0

}