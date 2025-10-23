document.querySelector("h1").addEventListener("mousemove",(e)=>{
    e.target.classList.add("heading")
})
document.querySelector("h1").addEventListener("mouseleave",(e)=>{
    document.querySelector("h1").classList.remove("heading")
})
document.querySelector("button").addEventListener("click",(e)=>[
    document.querySelector("div").classList.add("animate")
])

