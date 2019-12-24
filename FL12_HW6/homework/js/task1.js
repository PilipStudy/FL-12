
let a, b, c, discriminant, value1, value2;

do{
    a = prompt('Input coefficient a','');
      
    if (isNaN(a) === true || parseInt(a) === 0 || a ==='') {
        console.log('Invalid input data');
    } 
    
} 
 while(isNaN(a) === true || parseInt(a) === 0 || a ==='' );
 a = parseFloat(a); 
 
 do{
    b = prompt('Input coefficient b','');

    if (isNaN(b) === true || b ==='' ) {
        console.log( 'Invalid input data');
    }
    
} 
 while(isNaN(b) === true || b ==='' );
 b = parseFloat(b);

 do{
    c = prompt('Input coefficient c','');

    if (isNaN(c) === true || c === '' ) {
        console.log( 'Invalid input data');
    }
    
} 
 while(isNaN(c) === true || c === '' );
 c = parseFloat(c);

let two = 2,
    four = 4;



discriminant = b*b-four*a*c;

if(isNaN(a) === true || isNaN(b) === true || isNaN(c) === true){
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


