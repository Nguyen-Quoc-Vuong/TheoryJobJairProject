//hoisting : khi chạy file sẽ tạo bộ nhớ cho biến và hàm, hàm thì chạy luôn body

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