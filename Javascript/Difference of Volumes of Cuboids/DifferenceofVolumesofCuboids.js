function findDifference(a, b) {
    function multiply(ar){
      var arr = 1;
    for (var i = 0; i < ar.length;i++){
      arr = arr * ar[i];
      }
      return arr; 
    }
        if(multiply(a) > multiply(b)){
            return multiply(a) - multiply(b);
        }else{
          return multiply(b) - multiply(a);
        }
      }