// arguments giúp lấy ra các tham số truyền vào trong hàm 

function a(name) {
    console.log(arguments);
    console.log(name);

    let totalAge = 0
    
}

var user1 = {
    age: 20
}
var user2 = {
    age: 25
}
var user3 = {
    age: 30
}

a('Vuong', 'Nguyen', 'Van', user1, user2, user3);