const reverse = str => {
    let newStr = str.split("").reverse().join("")
    return newStr;
}

module.exports = reverse;