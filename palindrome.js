// Checks if a string is a palindrome
function checkPalindrome(str) {
    // Checks if string is not greater than 10 characters
    if (str.length > 10) {
        alert("String is too long! Please enter a string less than 10 characters.");
        return;
    }
    // Reverses the string
    var revStr = str.split("").reverse().join("");
    // Checks if reversed string is equal to original string
    if (revStr === str) {
        alert("The string is a palindrome!");
    } else {
        alert("The string is not a palindrome!");
    }
}

// Get the value from the text box
function getValue() {
    // Get the value from the textbox
    var str = document.getElementById("str").value;
    // Call the checkPalindrome function
    checkPalindrome(str);
}