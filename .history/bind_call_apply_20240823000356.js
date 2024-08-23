function displayName() {
    console.log(this.firstname + ' ' + this.lastname)
}
var user = {
    firstname: 'Vuong',
    lastname: 'Nguyen'
    displayName = function() {

    }
}
var v = displayName
v()