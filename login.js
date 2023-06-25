// Insert your code here
//inscription
document.querySelector("#register").addEventListener("clicK", function() {
const user ={
    name: document.querySelector("#registerName"). value ,
    email:document.querySelector("#registerEmail"). value,
    password: document.querySelector("#registerPassword"). value,
} ;
fetch("https://weatherapp-backend-f11etcgfy-katiachilla.vercel.app/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(user),

})
.then(response => response.json())
.then(data=>{
    if(data.result) {
        window.location.assign("index.html");
    }
})

})



//connection
document.querySelector("#connection").addEventListener("click", function(){
    const user = {
        email:document.querySelector("#connectionEmail").value,
        password: document.querySelector("#connectionPassword").value,
    };
    fetch("https://weatherapp-backend-f11etcgfy-katiachilla.vercel.app/users/signin",{
        method: "POST"
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(users)   
     })
     .then(res => res.json())
     .then(data => {
        if(data.result) {
            window.location.assign("index,html")
        }
     })
})