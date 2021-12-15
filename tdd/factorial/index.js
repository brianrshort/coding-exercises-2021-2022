const Calculate = {
    factorial: (num) => {
        if (num === 0) {
            return 1;
        } else {
            let output = 1;
            for (var i = 1; i <= num; i++) {
              output *= i; 
            }
            return output;
          }
        } 
  }
  
  module.exports = Calculate;
  
  
  