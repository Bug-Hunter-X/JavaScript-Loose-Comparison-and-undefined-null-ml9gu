function foo(x){
  if(x == undefined) return 0;
  return x + 1;
}

console.log(foo()); // output: 0
console.log(foo(null)); // output: 1
console.log(foo(undefined)); // output: 0