// arguments giúp lấy ra các tham số truyền vào trong hàm 

function a(name) {
    console.log(arguments);
    console.log(name);
}

var user1 = {
    age: 20
}
a('Vuong', 'Nguyen', 'Van');