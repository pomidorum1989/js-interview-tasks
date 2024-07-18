 function isParenthesisValid(s) {
    console.log(`Input value: ${s}`)
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let char of s) {
        if (char in map) {
            stack.push(char);
        } else if (Object.values(map).includes(char)) {
            if (stack.length === 0 || map[stack.pop()] !== char) {
                console.log("Incorrect parenthesis order");
                return false;
            }
        }
    }
    console.log("Parenthesses order is correct")
    return stack.length === 0;
};

isParenthesisValid("}{");
isParenthesisValid("{qwerty}");
isParenthesisValid("}qwerty{");
isParenthesisValid("{}");