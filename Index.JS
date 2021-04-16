//Exercise A
const test = 'strive school is the best'
console.log(test)

//Exercise B
let num1 = 10
let num2 = 20
let sum = num1 + num2
console.log(sum)

//Exercise C
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}
console.log(random(0,20))

//Exercise D
let me = {
    name: 'Ayotunde',
    surname: 'Adewunmi',
    age: 30
}
console.log(me)

//Exercise E
delete me.age
console.log(me)

//Exercise F
let skills = ['javaScript','HTML']
me.skills = ['javaScript','HTML']
console.log(me)

//Exercise G
me.skills.pop()
console.log(me)

//Exercise 1
const dice = function (integer1,integer2) {
    let result = Math.floor(Math.random() * (integer2 - integer1) + integer1)
    return result
}
console.log(dice(1,6))

//Exercise 2
const whoIsBigger = function(num1,num2){
    let result = Math.max(num1,num2)
    return result
}
console.log(whoIsBigger(1,2))
console.log(whoIsBigger(86,68))

//Exercise 3
const splitMe = 'I love coding'
let splitMeResult = splitMe.split(' ')

console.log(splitMeResult)

//Exercise 4
const deleteOne = function(string,boolean) {
    if (boolean === true){
        let result = string.slice(1)
        return result
    } else if (boolean === false) {
        let result = string.slice(0, string.length -1)
        return result
    }
}
console.log(deleteOne('climb',3>5))
console.log(deleteOne('Love', 12 - 12 === 12))
console.log(deleteOne('Love', 12 - 12 === 0))

//Exercise 5
const onlyLetters = ('I have 4 dogs')
let onlyLettersWithoutNumbers = onlyLetters.replace(/[0-9]/g, '')
console.log(onlyLettersWithoutNumbers)

//Exercise 6

//Exercise 7

//Exercise 8

//Exercise 9

