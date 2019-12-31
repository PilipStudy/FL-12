function makeNumber(a){
    var numberElement = ''
    for (var i = 0; i < a.length; i++){
        if (parseInt(a[i])){
            numberElement += a[i];
        }
    }
    
    if( numberElement === ''){
        return numberElement;
    } else {
        return numberElement.split('')
    }
    
}
makeNumber();