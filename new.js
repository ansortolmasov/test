const modal = document.querySelector("#modal"),
modalBack = document.querySelector("#modalBack")





modal.addEventListener("click",()=>{

    // document.getElementById("modalBack").classList.add("show");
    // document.getElementById("modalBack").classList.add("hide");
     modalBack.classList.add("show")
     modalBack.classList.remove("hide")
})

closeModal.addEventListener("click",() =>{
    modalClose()
})

modalBack.addEventListener("click", (event) =>{
    if(event.target.classList.contains("show")){
       modalClose() 
    }
})

window.addEventListener("keydown", (event) =>{
    if(event.key === "Escpe" && modalBack.classList.contains("show")) {
        modalClose()
    }
})


function modalClose(){
    modalBack.classList.add("hide")
    modalBack.classList.remove("show")
}