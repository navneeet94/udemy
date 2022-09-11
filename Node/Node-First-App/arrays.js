const hobbies = ['Sports','Cooking','learning']


for (let items of hobbies){
    console.log(items)
}


console.log(hobbies.map(hobby => 'Hobbie :- ' + hobby));
console.log(hobbies)
hobbies.push('programming')
console.log(hobbies)
