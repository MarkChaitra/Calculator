let num1 = "";
let num2 = "";
let op = "";

const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
  };

let output = document.getElementsByClassName('output')[0];

document.querySelectorAll('.numbers').forEach(input => {

    input.addEventListener('click', function(){

        if(op == ""){
            num1 += input.textContent;
            output.textContent = num1;
            console.log("num1 =" +num1);
        }
        else{
            num2 += input.textContent;
            output.textContent = num2;
            console.log("num2 = " + num2);
        }
    
    });
});

document.querySelectorAll('.symbols').forEach(symbol => {

    symbol.addEventListener('click', function(){

        if(num1 != "" && num2 == ""){
            op = symbol.textContent;
            console.log(op);
        }

    });
});

document.querySelector('.solve').addEventListener('click', function(){

    if(num1 == "" && num2 == ""){return;}

    num1 = operators[op](Number(num1), Number(num2));

    num2 = "";
    op = "";
    output.textContent = num1;

});

document.querySelector('.reset').addEventListener('click', function(){

    num1 = "";
    num2 = "";
    op = "";

    output.textContent = "";

});
