// arguments giúp lấy ra các tham số truyền vào trong hàm 

function a(name) {
    console.log(arguments);
    console.log(name);

    let totalAge = 0
    for (let i = 1; i < arguments.length; i++) {
        if (typeof arguments[i] === 'object') {
        totalAge += arguments[i].age;
    }
}
    console.log(totalAge);
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


// khi truyền tham số vào hàm, nếu không truyền thì sẽ mặc định là undefined nên phải dùng arguments để kiểm tra 
function sayHi(firstname, lastname) {
    let midleName = arguments[2] || '';

    console.log('Hi ' + firstname + ' ' + midleName + ' ' + lastname);
}

sayHi('Nguyen', 'Van', 'Vuong');
sayHi('Nguyen', 'Van');

// default argument 
function defaultArg(total, tips = 0) {
     // tips = tips || 0

    // if (tips === undefined ){
    //     tips = 0
    // }
    console.log(total + tips);
}
defaultArg(100, null); // 100

var a = function()