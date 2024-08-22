//hoisting : khi chạy file sẽ c

hello()
console.log(homepage)

var homepage = 'niviki.com'
function hello(){
    var name = 'khoa'
    console.log('hello')    
    function hi(){
        var middleName = 'Van'
    }
}