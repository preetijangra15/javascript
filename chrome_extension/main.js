let myleads = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulel = document.getElementById("ul-l")
const deleteEl = document.getElementById("delete-btn")
const tabbtn = document.getElementById("tab-btn")
console.log(ulel)
console.log(deleteEl)

let leadsfromstorage = JSON.parse(localStorage.getItem("myleads"))

if(leadsfromstorage){
    myleads = leadsfromstorage
    renderleads()
}

deleteEl.addEventListener("click", function(){
    localStorage.clear()
    myleads = []
    renderleads()
})




tabbtn.addEventListener("click", function(){
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads))
        renderleads()
    })
    
})

inputbtn.addEventListener("click", function(){
    myleads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleads", JSON.stringify(myleads))
    renderleads()
    
})

function renderleads(){

    let listitems = ""

    for (let i = 0; i < myleads.length; i++) {
        listitems += `
            <li>
                <a target = '_blank' href = '${myleads[i]}'>
                    ${myleads[i]} 
                </a>
            </li>`
    }

    ulel.innerHTML = listitems
}