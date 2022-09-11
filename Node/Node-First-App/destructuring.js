const per = {
    'name': 'Navneet Taneja',
    age: 27,
    greet(){
        console.log('hi i am :- ' + this.name)
    }
}

// normal way
// const printName = (perData)  => {
//     console.log(perData)
// }

// destrcuturing
const printName = ({name})  => {
    console.log(name)
}
// printName(per)

const {name,age} = per

console.log(name,age)

hobbies = ['Cooking','Proggraming']

const [hobby1,hobby2] = hobbies
console.log(hobby1,hobby2)