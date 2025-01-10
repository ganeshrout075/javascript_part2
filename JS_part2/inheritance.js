class User{
    constructor(username){
        this.username=username
    }


Logme(){

    console.log(`USERNAME is ${this.username}`);
    
}
}

// 


//  

class user {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username: ${this.username}`);
        
    }

   static createId(){
        return `123`


    }
}

const ganesh = new user("ganesh")
console.log(ganesh.createId);


class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const mouse = new Teacher("mouse","mouse@k.com")
console.log(mouse.createId);

