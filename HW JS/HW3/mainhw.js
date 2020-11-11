
    let firstInput = +prompt('Введите первое число')

    let operation = prompt('Введите +,-,*,/')

    let secondInput = +prompt('Введите второе число')

    function calc (firstInput, operation, secondInput){
        switch (operation){
            case '+':
                return firstInput + secondInput;
            case '*':
                return firstInput * secondInput;
            case '-':
                return firstInput - secondInput;
            case '/':
                return firstInput / secondInput;
        }
    }
    console.log(`${firstInput} ${operation} ${secondInput} = ${calc(firstInput, operation, secondInput)}`)