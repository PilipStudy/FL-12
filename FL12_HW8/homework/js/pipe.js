function addOne(x) {
    return x + 1;
  }
function pipe() {
     var n = arguments.length;
     var result = null;
     var x = arguments[0];
     var i; 
  for (i = 1; i !== arguments.length-1 ; i++){  
    result =+ arguments[n-i](x);
    x = result;
   
}
      return result ;
}   
pipe();
addOne();