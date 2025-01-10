// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <button>Button clicked</button>
// </body>
// <script>
// class React{
//     constructor(){
//         this.library = "React"
//         this.server ="https://localhost:300"

//         // requirement
//         document.querySelector('button')
//                 .addEventListener('click',this.handleclick.bind(this))
//     }
//     handleclick(){
//         console.log("button clicked");
//        console.log(this.server);
        
//     }
// }

// const app = new React()

// const m= Object.getOwnPropertyDescriptor(Math, 'pi')
// console.log(m);

const chai ={
    name:"ginger tea",
    price: 200,
    isavailable: true,

    orderchai:function(){
        console.log("chai nhi bani");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name',{
    writable:false,
    enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor());

for (let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
        }}      

 