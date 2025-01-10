function SetUsername(username){
    // complex DB calls
    this.username = username
}


function createUser(username, email, password){
    SetUsername.call (this,username)
    this.username = username
    this.email = email
    this.password = password
}

// const chai = new createUser('chai','chai@fb.com','123')
// console.log(chai);


// ES6

// class User {
//     constructor(username,email, password){

//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return`${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai" , "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeusername());

// behind the scene

function User(username,email, password){
    this.username = username;
    this. email = email;
    this. password =password;

}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User('tea','tea@gmail.com','132')

console.log(tea.encryptPassword());
console.log(tea.changeusername());

