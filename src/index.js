function eval(str) {
   // Do not use eval!!!
    const operators = ['+','-','*','/']
    const figures = ['0','1','2','3','4','5','6','7','8','9']
    const openBrackets = ['('];
    
    const bracketPair = {[')']:'('};

    const numbers = []
    resultArray =[]
    let a=''


    for (let i = 0; i < str.length; i++){
        let currentSymbol = str[i];
        
        if (figures.includes(currentSymbol)){
            a+= currentSymbol
            
                    if (figures.includes(str[i+1])){
                    
                    let b = 0
                    } else{
                        numbers.push(Number(a))
                        resultArray.push(Number(a))
                        a=''
                        
                    }
                
            
        }            

        
            if (operators.includes(currentSymbol || currentSymbol === '(' || currentSymbol === ')')){
                resultArray.push(currentSymbol)
            }
            
        

    }
      
    for (let i = 0; i < resultArray.length; i++){
        if (operators.includes(resultArray[i])){
            let x = resultArray[i-1]
            let y = resultArray[i+1]
            switch (resultArray[i]){
                case '+':
                    return x+y;
                    
                case '-':
                    return x-y;
                
                case '*':
                    return x*y;

                    case '/':
                        if(x != 0) 
                        return x/y;

            }
        }
    }

          


    return 4;
}

function expressionCalculator(expr) {
    let str = expr
    

    return eval(str)
}

module.exports = {
    expressionCalculator
}