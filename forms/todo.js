let btn=document.querySelector(".btn")
let items_div=document.querySelector(".items")
let ul=document.querySelector(".ul")
btn.addEventListener("click",()=>{
    let inp=document.querySelector(".task")
    let li_b=document.querySelectorAll("li")
    let li=document.createElement("li")
    let rem_btn=document.createElement("button")
    if(inp.value!="/0"){
    li.innerText=inp.value
    ul.appendChild(li)
    rem_btn.innerText="remove"
    li.appendChild(rem_btn)
    inp.value=""
    }
    
    rem_btn.addEventListener("click",()=>{
    let li=document.querySelector("li")
    let ul=document.querySelector(".ul")
    ul.removeChild(li)
    
})
    

})

