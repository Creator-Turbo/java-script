//  object literals 


const mySym = Symbol("key1")

const JsUser = {
    name : "bablu",
    "fullname" : "Bablu kumar Pandey",
    [mySym] : "myKey1",
    age : 18,
    location : "Jainpur",
    email : "bablupandy446@gamil.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullname"])


JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "om@chatgpt.com"
console.log(JsUser)
