
let a, b, c, discriminant, value1, value2;

do{
    a = prompt('Input coefficient a','');
      
    if (isNaN(a) === true || parseInt(a) === 0) {
        console.log('Invalid input data');
    } 
    
} 
 while(isNaN(a) === true || parseInt(a) === 0 );
    
 do{
    b = prompt('Input coefficient b','');

    if (isNaN(b) === true ) {
        console.log( 'Invalid input data');
    }
    
} 
 while(isNaN(b) === true );
 
 do{
    c = prompt('Input coefficient c','');

    if (isNaN(c) === true ) {
        console.log( 'Invalid input data');
    }
    
} 
 while(isNaN(c) === true );

let two = 2,
    four = 4;



discriminant = b*b-four*a*c;

if(a === null || b === null || c === null){
    console.log("you didn't enter necessary data");

} else if(discriminant > 0){
     value1 = (-b + Math.sqrt(discriminant))/two*a;
     value2 = (-b - Math.sqrt(discriminant))/two*a;
     console.log('x1=',Math.round(value1), 'x2=',Math.round(value2));
     } else if(discriminant === 0){
    value1 = -b/two*a;
    if(value1 === 0){
        value1 = -value1;
    }
    console.log('x=',Math.round(value1));
} else {
    console.log('no solution');
}


