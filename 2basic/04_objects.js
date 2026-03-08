// const tinderUser = new Object()

// signled
const tinderUser = {}

tinderUser.id = "12234abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser)



const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userfullname : { 
            firstname : "bablu",
            medialname : "kumar",
            lastname : "pandey"
        }
    }
}
// 
console.log(regularUser.fullname);


console.log("--------------------------Combine the object-----------------------------");

const obj1 = {1:"a" , 2: "b"}
const obj2 = {3: "a", 4: "b"}


// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({} , obj1,obj2 )

const obj3 = {...obj1 ,...obj2}
console.log(obj3)




const course = {
    coursename : "js in hindi",
    price : "999",
    courseInsstructor : "bablu"
}

// course.courseInstructor 

const {courseInsstructor: instructor} = course



// console.log(courseInsstructor)
console.log(instructor)
