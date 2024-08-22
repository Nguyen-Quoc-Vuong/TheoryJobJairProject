var user = {
    username: 'Vuong',
    age: 36,
    viewInfor: function(){
        console.log(this.username + ' ' + this.age);
    },
    location : {
        lat : 0.001,
        lng : 0.002,
    }
}

user.viewInfor();