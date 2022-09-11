const username = "Navneet"
let age = 27
let hasHobbies = true

const summerizeUser = (usName, usAge, usHobby) => {
    return `User name ${usName}, age ${usAge}, hobbies ${usHobby}`
}

console.log(summerizeUser(username, age, hasHobbies))


const add = (a,b) => {
    return `${a} + ${b} => ${a+b}`
} 



console.log(add(2,4))


const multiply = (a,b) => a * b
console.log(multiply(2,4))