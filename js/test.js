/* @flow */

(function(){
  var foo = [1,2,3].map(i => i * 2);
  var test = [1,2,3].map(i => {
    return i * 7;
  });
}());

function flow(x: string, y: number): string {
  return x.length  * y;
}

flow('hello', 42);
