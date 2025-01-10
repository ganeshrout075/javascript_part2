const user = {
    username: "Ganesh",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new promiseFive()
// const date = new date()

function User(username, logincount, isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("ganesh", 12,true)
const userTwo = new User("cahi",11,false)
console.log(userOne);
console.log(userTwo);


//new = create new object,

// object====
function createUser(username,score){
    this.username=username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe()
tea.printMe()
