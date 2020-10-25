
// You should implement your task here.

module.exports = function towelSort (matrix) {
  




  if (matrix === undefined || matrix.length == 0) {
    return mod=[];
  }
    else {
      let mod=matrix[0];
      for(let i=1; i<matrix.length; i++){
          if(i%2==0){
              mod = mod+','+ matrix[i];
          }
          else{
              mod = mod+','+ matrix[i].reverse();
          }
          
      }
      return mod.split(",");
    }
  
  
  

  
}
