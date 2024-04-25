const User = {
    _email: 'h@hc.com',
    _password: "abc",

   // _ private property me convert krta he

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
//factory function Object.create(User) //user ka reference lega
const tea = Object.create(User)
console.log(tea.email);