// let data = false;

// function pizza() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if (data) {
//                 resolve("your order is ready")
//             } else {
//                 reject("your order is cancel")
//             }
//         }, 9000);


//     })
// }

// async function bro() {
// //     pizza().then((message)=>{
// //         console.log(message)
// //     })
// //     .catch((error)=>{
// //         console.l
// //     }
// // )
// // console.log("hello")

// or

//     try{
//      let p = await pizza()
//     console.log(p)
//     }catch(e){
//         // console.log("this is a error",e)
//         // or
//         console.log(`this is a error ${e} ${e}`)
//     }  

//     console.log("hello")

// }
// bro()


// fetch("https://fakestoreapi.com/products")
// .then((product)=>{
//     if(!product.ok){
//        throw new Error("some thing is wrong");
//     }else{
//      return product.json()
//     }
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((e)=>{
// console.log("error",e)
// })

// async function datas() {
//     try {
//         let responce = await fetch("https://fakestoreapi.com/product")
//         let products = await responce.json()
    
//         console.log(products)

//     } catch (error) {
//         console.log("this is a error",error)
//     }
// }

// datas()