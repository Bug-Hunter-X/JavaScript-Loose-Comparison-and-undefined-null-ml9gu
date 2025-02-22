# JavaScript Loose Comparison and undefined/null
This repository demonstrates a common JavaScript pitfall involving loose comparison (==) and the handling of undefined and null values.

## The Bug
The provided `foo` function intends to return 0 if the input `x` is undefined and `x + 1` otherwise. However, due to JavaScript's loose comparison, `null` is treated differently than `undefined`.  This results in unexpected behavior.

## The Solution
The solution uses strict equality (===) to explicitly check for `undefined`. This ensures that only the absence of a value (undefined) triggers the return of 0. Null is treated as a distinct value.