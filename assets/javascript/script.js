
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';

var pwd = '';


function generate() {
    var confirmLength = '';
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");
        if (confirmLength === null) {
            break;
        }
    }
    if (confirmLength) {
        if (confirm("Would you like to use lowercase characters?") == true) {
            lowerSelection = true
        } 

        if (confirm("Would you like to use uppercase characters?") == true) {
            upperSelection = true
        }

        if (confirm("Would you like to use special characters?") == true) {
            specialSelection = true
        }

        if (confirm("Would you like to use Numbers?") == true) {
            numberSelection = true
        }
    }
    var characters = '';
    characters += (lowerSelection ? lower : '');
    characters += (upperSelection ? upper : '');
    characters += (specialSelection ? special : '');
    characters += (numberSelection ? numbers : '');

    pwd = password(confirmLength, characters);

    document.getElementById("password").innerHTML = pwd;

}
function password(l, characters) {
    var pwd = '';
    for (var i = 0; i < l; ++i) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}
