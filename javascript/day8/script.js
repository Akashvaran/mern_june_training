// function data(){
//     alert("form submitted")
// }

// document.getElementById("forms").addEventListener("submit",function(e){
//     alert("submit button clicked")
// })

// function validation(Username,Password){
//     // let nameRegex=
//     let passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,20}$/
//     if(Username==''){
//         alert("name is required")
//         return false
//     }else if(!/^[a-zA-Z\s]{3,30}$/.test(Username)){
//         alert("invalid name format")
//     }

//     if(Password==''){
//         alert("password is required")
//         return false
//     }else if(!passwordRegex.test(Password)){
//         alert("invalid password")
//     }

//     return true
// }



// document.getElementById("forms").addEventListener("submit",(e)=>{
//     e.preventDefault()
//     // alert("clicked")
//     let Username=document.getElementById("Username").value
//     let Password=document.getElementById("password").value

//     // alert(`welcome ${Username} password is ${Password}`)
//     let formvalidation=validation(Username,Password)


// })


// setTimeout(() => {
//     console.log("welcome")
// }, 5000);

// let count=0

// let clear=setInterval(() => {
//     console.log("hello akash varan");
//     count++;
//     if(count>3){
//         clearInterval(clear);
//     }
// }, 600);


// hello()

// function hello(){
//     console.log("welcome to all")
// }

welcome()

const welcome=()=>{
    console.log("welcome to all")
}