let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let totalEl = document.getElementById("total-el")
let total=0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    total += count

    totalEl.textContent = "Total pages read: " + total

    let countStr = count + " - "
    saveEl.textContent += countStr

    count = 0
    countEl.textContent = 0
}


