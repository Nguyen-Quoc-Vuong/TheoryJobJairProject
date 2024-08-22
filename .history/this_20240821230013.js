// this: gọi đến object hiện tại, hoặc global object nếu không có object nào được gọi
// chú ý, call-site đang được gọi ở đâu thì this lấy ở đó (call-site là nơi mà function được gọi)
user = {
    firstname:'Nguyen',
    lastname: 'Vuong',

    showName: function() {
        
        var self = this;
        function showInfor(){
            console.log(self.firstname + ' ' + self.lastname);
        }
        showInfor();

    }
}
showName.showInfor(); // Nguyen Vuong