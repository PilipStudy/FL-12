function getMin(){
    var n = arguments.length;
     for (var i = 0; i < n-1 ; i++){
         var min = i;
         for (var j = i + 1; j < n; j++){
             if (arguments[j] < arguments[min]){
                 min = j;
             }
             var t = arguments[min]; 
             arguments[min] = arguments[i];
             arguments[i] = t;
         }
     }
     return arguments[i];
 }
 getMin();    