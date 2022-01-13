module.exports = function toReadable (number) {
  let numbersArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
  let decimalArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];
    if (number === 0) {
      return 'zero';
    }
    if (number < 20) {
        return numbersArr[number];
    }
    let numbersString = number.toString();
    if (numbersString.length === 2) {
        return (decimalArr[numbersString[0]] + ' ' + numbersArr[numbersString[1]]).trim();
    }
    if (numbersString.length === 3) {
        if (numbersString[1] === '0' && numbersString[2] === '0') {
           return numbersArr[numbersString[0]] + ' hundred';
        }
        else {
          return numbersArr[numbersString[0]] + ' hundred ' + toReadable(Number(numbersString[1] + numbersString[2]));
        }
    }
}
