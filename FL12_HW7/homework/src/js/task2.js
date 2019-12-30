let bResalt, nGetRandomIntInclusive, nUserChoice, nFirstPrize, nSecondPrize, nAttempt, nPossiblePrize, nTotal;
const eight = 8, twelve = 12, three = 3, two = 2, twoHundred = 200, oneHundred = 100, pointTwoFive = 0.25; 
bResalt = confirm('Do you want to play a game?');
if (bResalt === false ){
    alert('You did not become a billionaire, but can.');
} else {
    nGetRandomIntInclusive = Math.floor(Math.random()*eight);
    // console.log(nGetRandomIntInclusive); you can see correct number using console
    nFirstPrize = 0;
    nAttempt = three;
    nPossiblePrize = oneHundred;
    // first game
    for( let i = 1; i >= pointTwoFive && nFirstPrize === 0 ; i=i/two ){
        nUserChoice = parseInt(prompt(
            'Choouse a number from 0-8'+
            '\nAttempts left: '+ nAttempt + 
            '\nTotal prize: '+ nFirstPrize +
            '\nPossible prize on current attempt: '+ nPossiblePrize,''
            ));
        if(nUserChoice !== nGetRandomIntInclusive){
            nFirstPrize = 0;
            nAttempt = nAttempt - 1;
            nPossiblePrize = nPossiblePrize/two;
            // next round
            if( nFirstPrize === 0 && i <= pointTwoFive){
                alert('Thank you for your participation. Your prize is:'+ nFirstPrize +'$' );
                bResalt = confirm('Do you want to play again?' );
                 if(bResalt === true){
                    i = two;
                    nFirstPrize = 0;
                    nAttempt = three;
                    nPossiblePrize = oneHundred;
                    nGetRandomIntInclusive = Math.floor(Math.random()*eight);
                    // console.log(nGetRandomIntInclusive);you can see correct number using console
                } else {
                    alert('Canceled');
                }
            }
        } else {
            nFirstPrize = oneHundred*i;
            alert('Thank you for your participation. Your prize is:'+ nFirstPrize +'$’');
            bResalt = confirm('Do you want to play again?');
            // second game
            if(bResalt === true){               
                nGetRandomIntInclusive = Math.floor(Math.random()*twelve);
                // console.log(nGetRandomIntInclusive);you can see correct number using console
                nSecondPrize = 0;
                nAttempt = three;
                nPossiblePrize = twoHundred;
                for( let i = 1; i >= pointTwoFive && nSecondPrize === 0 ; i=i/two ){
                    nUserChoice = parseInt(prompt(
                        'Choouse a number from 0-12'+
                        '\nAttempts left: '+ nAttempt + 
                        '\nTotal prize: '+ nFirstPrize +
                        '\nPossible prize on current attempt: '+ nPossiblePrize,'')
                        );
                    if(nUserChoice !== nGetRandomIntInclusive){
                        nSecondPrize = 0;
                        nAttempt = nAttempt - 1;
                        nPossiblePrize = nPossiblePrize/two;
                        // next round
                        if( nSecondPrize === 0 && i <= pointTwoFive){
                            alert('Thank you for your participation. Your prize is:'+ nSecondPrize +'$' );
                            bResalt = confirm('Do you want to play again?' );
                             if(bResalt === true){
                                i = two;
                                nSecondPrize = 0;
                                nAttempt = three;
                                nPossiblePrize = twoHundred;
                                nGetRandomIntInclusive = Math.floor(Math.random()*twelve);
                                // console.log(nGetRandomIntInclusive); you can see correct number using console
                            } else {
                                alert('Canceled');
                                alert('Thank you for your participation. Your total prize is:'+ nFirstPrize +' $' );
                            }
                        }
                       
                    } else {

                        nSecondPrize = twoHundred * i;
                        nTotal = nSecondPrize + nFirstPrize;
                        alert('Thank you for your participation. Your prize is:'+nTotal+' $' );
                    }
                }            
            } else {
                alert('Canceled');
            }
        }   
    }

}






