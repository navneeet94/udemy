const userList = ['User 1','User 2', 'User 3', 'User 4', 'User 5']

userList.forEach((val)=>{
    console.log(val)
    document.getElementById('userList').innerHTML += `<li><div class="inside_user">${val}</div></li>`
})

// document.getElementById('userList').innerHTML += 