const   form = form.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allIP = form.querySelectorAll(".first input");
nextBtn.addEventListener("click",()=>{
    allIP.forEach(input=>{
        if(input.value!=""){
            form.classList.add('secActive');
        }
        else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click",()=>{
    form.classList.remove('secActive');
})