// 1
function convertValue(){
    let value = [];
    for ( let i = 0; i < arguments.length; i++){
        if (typeof arguments[i] === 'string' ){
            value[i] = parseInt(arguments[i])
        } else if(typeof arguments[i] === 'number'){
            value[i] = `${arguments[i]}`
        }
    }
    return value;
}
// 2

// Second parameter: function(el){console.log(el * 2)}

function executeforEach(array){
    for( let i = 0; i < array.length; ++i){
        let el = array[i];
        arguments[1](el);
    }
}
// 3

// Second parameter: function(el){return el + 3}

function mapArray(array){  
    for( let i = 0; i < array.length; ++i){
        if(typeof array[i] === 'string' ){
            array[i] = parseInt(array[i]);
        }
        let el = array[i];
        array[i] = arguments[1](el);
    }
    return array;
}

// 4
// Second parameter:function(el) { return el % 2 === 0 }

function filterArray(array){
    let resultArray = [];
    let j = 0;
    for( let i = 0; i < array.length; ++i){
        let el = array[i];
        if(arguments[1](el) === true){
            resultArray[j] = array[i];
            j = j + 1; 
        }
    }
    return resultArray;
}
// 5
function flipOver(){
    let stringValue = arguments[0];
    let flipString = '';
    for(let i = stringValue.length-1; i >= 0; --i){
        flipString += stringValue[i]
    } 
     return flipString;
 }

// 6 
function makeListFromRange(range){
    let resultArray = [];
    for(let i = 0; i < range[1] - range[0] + 1; ++i ){
        resultArray[i] = range[0]+i;  
    }
    return resultArray;
} 

// 7
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
function getArrayOfKeys(array, key){
    let resultArray = [];
    for(let i = 0; i < actors.length; ++i){
    resultArray[i] = array[i][key];
    }
    return resultArray;
}

//8 This function must use like second parameter for function mapArray(array) №3

function substitute(el){
    const thirty = 30;
    if(el > thirty){ 
        let el = el;
    } else {
        el = '*'
    }
    return el;
} 

// 9
const year = 2019;
const two = 2;
const date = new Date(year, 0, two);
function getPastDay(param, dayAgo){   
    const oneDayMilliseconds = 86400000;
    let changeDate = new Date( date.getTime() - oneDayMilliseconds * dayAgo);
    return changeDate.getDate();
}
//10
function formatDate(date){  
 return date.getFullYear() + '/'+ (date.getMonth()+1) +'/'+ date.getDate() +' ' + date.getHours()+':'+date.getMinutes();
} 




