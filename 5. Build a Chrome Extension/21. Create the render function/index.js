let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    // 2. Call the renderLeads() function
    renderLead()
})

// 1. Wrap the code below in a renderLeads() function
function renderLead(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}
