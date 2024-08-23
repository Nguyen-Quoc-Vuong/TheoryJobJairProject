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
var v = displayName.bind(this)
v()