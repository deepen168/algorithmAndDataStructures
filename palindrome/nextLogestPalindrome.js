function nextPelindrome(n) {
    if (typeof n === "number") {
        if (n < 10) {
            return 11;
        }
        let nextPelindrome = false;
        while (nextPelindrome === false) {
            n++;
            if (isPalindrome(n)) {
                return n;
            }
        }
    }
}

function isPalindrome(str) {
    str = str.toString();
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}