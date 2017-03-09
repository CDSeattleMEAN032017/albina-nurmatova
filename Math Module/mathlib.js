module.exports = {
    add: function(num1, num2) { 
        var sum = 0;
        sum = num1+num2
        return sum
    },
    multiply: function(num1, num2) {
        var result = 0;
        result = num1 * num2;
        return result
    },
    square: function(num) {
        var value = 0;
        value = num*num;
        return value;
    },
    random: function(num1, num2) {
        var randomnum = 0;
        randomnum = Math.floor(Math.random() * (num2-num1+1) + num1);
        return randomnum;
    }
};


// add two numbers (e.g. math.add(2,3) should return 5)
//multiply two numbers (e.g. math.multiply(3,5) should return 15)
//square a number (e.g. math.square(5) should return 25)
//returns a random number between the two numbers (e.g. math.random(1,35) should return a random number between 1 and 35)