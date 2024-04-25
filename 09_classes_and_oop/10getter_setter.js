class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }


    // ek _ de taki construcor or get set method ke sath race na lage
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email); //ye get set method se a rha 
console.log(hitesh.password); //ye get set method se a rha


console.log(hitesh._email); //ye constructor
console.log(hitesh._password);//ye bhi constructor se value a rha