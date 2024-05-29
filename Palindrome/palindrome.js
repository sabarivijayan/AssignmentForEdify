function isPalindrome(s) {
    // Normalize the string by removing non-alphanumeric characters and converting to lowercase
    const normalizedStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Check if the normalized string is equal to its reverse
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Should return true
console.log(isPalindrome("Hello, World!")); // Should return false
