// class parent{
// print(){
//     console.log("this is a parent")
// }
// }

// class child extends parent{
//     student(){
//         console.log("this is child");

//     }
// }
// let clas=new child()
// clas.student();
// clas.print();






// class animal{
//     eating(){
//         console.log("animals are eating")
//     }
// }
// class dog extends animal{
// bark(){
//     console.log("dog are barking");

// }
// }
// class puppy extends dog{
//     play(){
//         console.log("puppy are playing");

//     }
// }

// let a=new puppy()
// // a.play()
// // a.bark()
// // a.eating()
// a.eating()
// a.bark()
// a.play()





// class grandfather {
//     parent() {
//         console.log("this is a parent");

//     }
// }

// class child1 extends grandfather {
//     son1() {
//         console.log("iam first child")
//     }
// }
// class grandchild1 extends child1{
//     grandson1() {
//         console.log("Iam a child1 son");

//     }
// }

// class child2 extends grandfather {
//     son2() {
//         console.log("iam a second child");

//     }
// }

// class grandchild2 extends child2 {
//     grandson2() {
//         console.log("Iam a child2 son");

//     }
// }


// let family1=new grandchild1();
// console.log("this is a family one")

// family1.grandson1()
// family1.son1()
// family1.parent()




// let family2=new grandchild2();
// console.log("this is a family two")

// family2.grandson2()
// family2.son2()
// family2.parent()







// class father{
//     parent1(){
//         console.log("this is a parent 1")
//     }
// }

// class mother{
//     parent2(){
//         console.log("this is a parent 2")
//     }
// }


// class child extends mother,father{
//     son(){
//         console.log("iam child")
//     }
// }
// let amb=new child()




// const canFly = (Base) =>
//   class extends Base {
//     fly() {
//       console.log("Flying...");
//     }
//   };

// const canSwim = (Base) =>
//   class extends Base {
//     swim() {
//       console.log("Swimming...");
//     }
//   };

// class Animal {
//   eat() {
//     console.log("Eating...");
//   }
// }

// class Duck extends canSwim(canFly(Animal)) {
//   quack() {
//     console.log("Quack!");
//   }
// }

// const d = new Duck();
// d.eat();  
// d.fly(); 
// d.swim(); 
// d.quack();

