let a, b, c;

do{
    a = prompt('Please input the length of the "a" side of triangle','');
     
    if (isNaN(a) === true || a ===''){
        alert('input values should be ONLY numbers ');
    }                          
    if (parseFloat(a) === 0 || parseFloat(a) < 0 ){
        alert('A triangle must have 3 sides with a positive definite length');
    }
} 
while(isNaN(a) === true || parseFloat(a) === 0 || parseFloat(a) < 0 || a === '');

a = parseFloat(a);
    
do{
    b = prompt('Please input the length of the "b" side of triangle','');
    
    if (isNaN(b) === true || b === ''){
        alert('input values should be ONLY numbers ');
    }                          
    if (parseFloat(b) === 0 || parseFloat(b) < 0 ){
        alert('A triangle must have 3 sides with a positive definite length');
    }
} 
while(isNaN(b) === true || parseFloat(b) === 0 || parseFloat(b) < 0 || b === '');

b = parseFloat(b);
    
do{
    c = prompt('Please input the length of the "c" side of triangle','');
    
    if (isNaN(c) === true || c === ''){
        alert('input values should be ONLY numbers ');
    }                          
    if (parseFloat(c) === 0 || parseFloat(c) < 0 ){
        alert('A triangle must have 3 sides with a positive definite length');
    }
} 
while(isNaN(c) === true || parseFloat(c) === 0 || parseFloat(c) < 0 || c === '');

c = parseFloat(c);

if(isNaN(a) === true || isNaN(b) === true || isNaN(c) === true){
    alert("you didn't enter necessary data");
} else if( a + b <= c || b + c <= a || a + c <= b ){
    alert('Triangle doesn’t exist');
} else if(c === b && b === a && c === a){
    alert('Equilateral triangle');
} else if(c === b || b === a || c === a){
    alert('Isosceles triangle');
} else { 
     alert('Scalene triangle'); 
}
 
    