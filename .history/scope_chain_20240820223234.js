khi 1 biến chạy thì nếu kco 
function b() {
  c()  
  function c(){
      d()
      function d(){
        console.log(text);
      }
  }
}
function a() {
  var text = "in a";
  b();
}

var text = "in gloal"; 
a();
