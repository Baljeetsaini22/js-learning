////?=================JavaScript Execution context================= 
//1. Global Execution Context (Global Enviorment) locate in (this)
//2. Function Execution Context
//3. Eval Execution Context
// i. {} -> Memory Creation Phase 
// -> collect the variable and store himself 
// val1 -> undefined
// val2 -> undefined
// addNum -> defination
// result 1 -> undefined
// resutl2 -> undefined

// ii. Execution Phase
// val1 <-  10
// val2 <-  5
// addNum -> newVariable, Enviorment + execution thread
// -> memory phase -> val1 -> undefined, val2 -> undefined
// total -> undefined
// -> Execution context -> num1 -> 10, num2 -> 5, total -> 15 
// After work Comptlete Execution phase delete and repeat

// let val1 = 10;
// let val2 = 5;
// function addNum(num1, num2) {
//     let total = num1 + num2
//     return total    
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10,  2)


//! ===========Call stack=======================
