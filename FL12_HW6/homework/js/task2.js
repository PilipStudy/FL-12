let a, b, c;

do{
    a = prompt('Please input the length of the "a" side of triangle','');
     
    if (isNaN(a) === true){
        alert('Invalid input data');
    }                          
    if (a === 0 || a < 0 ){
        alert('A triangle must have 3 sides with a positive definite length');
    }
} 
while(isNaN(a) === true || a === 0 || a < 0);
    
do{
    b = prompt('Please input the length of the "b" side of triangle','');
    
    if (isNaN(b) === true){
        alert('Invalid input data');
    }                          
    if (b === 0 || b < 0 ){
        alert('A triangle must have 3 sides with a positive definite length');
    }
} 
while(isNaN(b) === true || b === 0 || b < 0);
    
do{
    c = prompt('Please input the length of the "c" side of triangle','');
    
    if (isNaN(c) === true){
        alert('Invalid input data');
    }                          
    if (c === 0 || c < 0 ){
        alert('A triangle must have 3 sides with a positive definite length');
    }
} 
while(isNaN(c) === true || c === 0 || c < 0);

if(a === null || b === null || c === null){
    alert("you didn't enter necessary data");
}else if( a + b <= c || b + c <= a || a + c <= b ){
    alert('Triangle doesn’t exist');
}else if(c === b && b === a && c === a){
    alert('Equilateral triangle');
}else if(c === b || b === a || c === a){
    alert('Isosceles triangle');
}else { 
     alert('Scalene triangle'); 
}
 
    