// class animal{
//     sounds(){
//         console.log("animal make sounds")
//     }
// }

// class tiger extends animal{
//      sounds(){
//         console.log("tiger make sound roar")
//     }
// }
// class duck extends animal{
//     sounds(){
//         console.log("duck make sound quack quack")
//     }
// }

// let s=new duck()
// s.sounds()

// let t=new tiger()
// t.sounds()

// let a=new animal()
// a.sounds()


// class myCode {
    // add(a,b){
    //     return a+b

    // }
    // add(a,b,c){
    //     return a+b+c
    // }
    // add(a){

    //     return a*10
    // }


    // add(a, b, c) {
    //     if (c !== undefined) {
    //         return a + b + c
    //     } else {
    //         return a + b
    //     }
    // }

// }

// let d = new myCode()

// let q = d.add(20, 30, 50)
// let z =d.add(20,30)

// console.log(q)
// console.log(z)

// class Calculator {
//   add(a, b, c) {
//     if (c !== undefined) {
//       return a + b + c; 
//     }
//     return a + b;
//   }
// }

// const calc = new Calculator();
// console.log(calc.add(20, 30));    
// console.log(calc.add(20, 30, 40));


class bankAccount{
    #amount
    constructor(a,b){
        this.#amount=a;

    }

    debit(a){
        this.#amount -=a
       console.log(`this your bank balance ${this.#amount}`)
    }

    credit(a){
        this.#amount +=a
         console.log(`this your bank balance ${this.#amount}`)
    }
}

let bank=new bankAccount(12000)

bank.credit(3000)
bank.debit(6000)




