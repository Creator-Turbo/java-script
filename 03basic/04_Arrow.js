const user = {
    username : "histesh",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username = "bablu"
// user.welcomeMessage()

// console.log(this)



// const chai = function(){
//     let username = "bablu"
//     console.log(this.username)
// }


// chai()



const chai = () => {
    let username = "bablu"
    console.log(this.username);
}


// chai()





// const addTow = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTow(3,4))


// const addTow = (num1, num2) => num1 + num2

const addTow = (num1,num2) => (num1 + num2)

console.log(addTow(2,3))