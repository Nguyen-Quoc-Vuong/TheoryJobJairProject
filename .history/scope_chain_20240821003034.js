// khi 1 biến chạy thì nếu kco trong hàm của nó,thì sẽ nhận biến ở global
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

Ứng dụng của || 
function hello(name) {
    
    name = name || "default hello";
    console.log(name);
}
hello();