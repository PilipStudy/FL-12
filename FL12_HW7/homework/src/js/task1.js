let sEmail, sPassword, bResalt, sOldPassword, sNewPassword, sNewPasswordSecondTime;
const five = 5;
const six = 6;
   
sEmail = prompt('Please enter tour e-mail','');

if (sEmail === '' || sEmail === null || sEmail.trim().length === 0 ){
    alert( 'Canceled' );
} else if(sEmail.length < five ){
    alert( "I don't know any emails having name length less than 5 symbols" );
} else if( sEmail === 'user@gmail.com' || sEmail === 'admin@gmail.com' ){ 
        sPassword = prompt('Password', '');
        if ( sPassword === '' || sPassword === null ){
            alert( 'Canceled' );
        } else if( sEmail === 'user@gmail.com' && sPassword !== 'UserPass' ){
            alert( 'Wrong password' );
        } else if( sEmail === 'admin@gmail.com' && sPassword !== 'AdminPass' ){
            alert( 'Wrong password' );
        } else {
            bResalt = confirm( 'Do you want to change your password' );
            if (bResalt === false){
                alert( 'You have failed the change' );
            } else {
                sOldPassword = prompt( 'Could you write the old password','' );
                if( sPassword === sOldPassword ){
                    sNewPassword = prompt( 'Enter a new password','' );    
                } 
                 if( sNewPassword === null ){
                    alert( 'Canceled' );
                } else if( sNewPassword === '' || sNewPassword.trim().length === 0 ){
                    alert( 'Canceled' );
                } else if( sNewPassword.length < six ){
                    alert('It’s too short password. Sorry.');
                } else { 
                    sNewPasswordSecondTime = prompt('Enter a new password','');
                }
                if ( sNewPassword === sNewPasswordSecondTime ){
                        alert( 'You have successfully changed your password' );   
                } else {
                    alert( 'You wrote the wrong password.' );  
                }
            }
        }    
} else {
    alert( 'I dont know you' );
}  







 