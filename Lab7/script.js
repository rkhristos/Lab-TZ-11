//1.

function T1(value) {
    if (typeof value !== "number") {
      return "";
    }
    if (value % 2 === 0) {
      return "Число парне";
    } else {
      return "Число не парне";
    }
  }
  
  //2.
  
  function T2() {
    let number = 1;
    let simpleNumbers = [];
  
    for (let i = 0; i < 5; number++) {
      if (ValueIsSimple(number)) {
        simpleNumbers[i] = number;
        i++;
      }
    }
    return SumOfArrayNumbers(simpleNumbers);
  }
  function ValueIsSimple(value) {
    if (value <= 1) return false;
  
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  function SumOfArrayNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  
    return sum;
  }
  
  //3. 
  function T3(n) {
    let array = [];
    let row = "";
  
    for (let i = 0; i < n; i++) {
      if (row === "") {
        row = "1";
      } else {
        row += "1";
      }
  
      array[i] = Number(row);
    }
  
    return SumOfArrayNumbers(array);
  }