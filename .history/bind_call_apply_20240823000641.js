function displayName() {
    console.log(this.firstname + ' ' + this.lastname)
}
var user = {
    firstname: 'Vuong',
    lastname: 'Nguyen',
    showName : function() {
        console.log(this.firstname + ' ' + this.lastname)
    }
}
var v = displayName.bind(user) 
v()

//bind : nối lại với nhau
//call : giống bind nhưng chạy luôn hàm, không cần 'v()'