class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    //koi bhi object isee access nhi kr payega na ki uska instance ka object bhi nhi kar payega
    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
hitesh.logMe();
// console.log(hitesh.createId()) //error

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// iphone.logMe();
console.log(iphone.createId()); //error