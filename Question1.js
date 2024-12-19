
function Lengthoflongestsubstring(s) {
    let maxLength = 0; 
    let currentString = ""; 

    for (let char of s) {
        if (currentString.includes(char)) {
            currentString = currentString.slice(currentString.indexOf(char) + 1);
        }

        currentString += char;

        maxLength = Math.max(maxLength, currentString.length);
    }

    return maxLength;
}


console.log(Lengthoflongestsubstring("ABCBC"));
console.log(Lengthoflongestsubstring("AAA"));   
