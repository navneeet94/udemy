let obj1 = {
    'fname':'Navneet',
    'lname':'Taneja',
    'age':20,
    'hobbies':true,
    fullName: ()=>{
        return this.fname + this.lname
    }
}

console.log(obj1.fullName())



let obj2 = {
    'fname':'Navneet',
    'lname':'Taneja',
    'age':20,
    'hobbies':true,
    fullName(){
        return `${this.fname} ${this.lname}`
    }
}

console.log(obj2.fullName())