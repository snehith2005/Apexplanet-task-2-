let btn=document.querySelector(".btn")
let password=document.querySelector(".pwd")
let number=document.querySelector(".num")
let h4=document.querySelector("h4")
btn.addEventListener("click",(event)=>{
    event.preventDefault()
    let pwd=password.value
    let num=number.value
    if(!(pwd.length>=6)){
        h4.innerText="password must be greater than 6 characters"
    }
    if(!(num.length==10)){
        h4.innerText="mobile number should be exactly 10 numbers"
    }
})