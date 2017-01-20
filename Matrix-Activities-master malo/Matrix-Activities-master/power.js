const Matrix = require("matrix-js");

let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);

function power(mtrx,p){
  let old = mtrx;
  for(var i =0;i<p;i++){
   Matrix(old.prod(old))
  }
  return old;
    //mtrx is the matrix you input
    //p is the power of the matrix you want
}
console.log(A,10)

//testing code
console.log(power(A,10));
