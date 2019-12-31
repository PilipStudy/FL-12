function leapYear(a){
    var ms = Date.parse(a[0]);
    var d = new Date(ms)
    var year = d.getFullYear();
     if((year % 4 === 0 && year % 100 !== 0) || ( year % 400 === 0)) {
       var result = year +'is a leap Year';
    } else {
      result = year +'is not a leap Year';
    }
    return result;
  }
  leapYear();