function foo(x){
  if(x === undefined) return 0; // Use strict equality
  return x + 1;
}

console.log(foo()); // output: 0
console.log(foo(null)); // output: NaN
console.log(foo(undefined)); // output: 0