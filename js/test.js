(function(){
  console.log('hello world!');

  if (1 == 1)
    console.log('hmm');

  console.log([1,2,3].map(i => i * 2));
  console.log([1,2,3].map(i => {
    return i * 7;
  }));
}());
