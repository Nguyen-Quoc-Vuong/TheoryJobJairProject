function displayName() {
    console.log(this.firstname + ' ' + this.lastname)
}
var user = {
    firstname: 'Vuong',
    lastname: 'Nguyen'
    function displayName() {
        
    }
}
var v = displayName
v()