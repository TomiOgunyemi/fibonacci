// variable, data type, function, hoisting, scope

   let score =29 ;
    function tomi(){
        if (score>=70) {
            console.log('Excellent, You got an A')
        }else if(score>=60 && score<=69){
            console.log('You got a B')
        }else if(score>=50 && score<=59){
            console.log('You got a C')
        }else if(score>=40 && score<=49){
            console.log('You got a D')
        }else if(score>=30 && score<=39){
            console.log('You got an E')
        }else{
            console.log('You failed')
        }
    
    }

        tomi()