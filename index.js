
// const andrei = {
//     name: 'Andrei',
//     age: 32,
//     post: 'Sales manager',
//     post: 'sales'
// }

// class SalseManager {
//     constructor({name, age, sector}) {
//         this.name = name
//         this.age = age
//         this.sector = sector
//         this.post = 'Sales manager'
//     }

//     responsability () {
//         console.log('to sale')
//     }
// }

// const sergiu = new SalseManager({name: 'Sergiu', age: 35, sector: 'Buicani'})


// console.log(sergiu)

// class SalesDirector extends SalseManager {
//     constructor(options) {
//         super(options)
//         this.post = 'Sales director'
//         this.experienta = options.experienta
//     }

//     responsability() {
//         super.responsability()
//         console.log('Conducator')
//     }

//     get experientaInfo() {
//         return console.log("Experienta de lucru lui " + this.name + " este de:" + this.experienta )
//     }

//     set experientaInfo(newValue) {
//         this.experienta = newValue
//     }
// }

// const mihail = new SalesDirector({name: 'Mihail', age: 40, sector: 'Centru', experienta: 10})

// // Class Animal
// // Cat Dog
// // Kitty Zeus

// class Animal {
//     constructor(options) {
//         this.legs = options.legs
//         this.hasTail = options.hasTail        
//     }
// }

// class Cat extends Animal {
//     constructor(options) {
//         super(options)
//     }

//     voice() {
//         console.log('miau-miau')
//     }
// }

// class Dog extends Animal {
//     constructor(options) {
//         super(options)
//     }

//     voice() {
//         console.log('gav-gav')
//     }
// }

// const kitty = new Cat({legs: 4, hasTail: true})
// const zeus = new Dog({legs: 4, hasTail: true})

// kitty.newProp = 'test'

// console.log(kitty, zeus)

// kitty.voice()
// zeus.voice()

// const andrei = {
//     name: 'Andrei',
//     age: 32,
//     post: 'Sales manager',    
// }

// const { age, name } = andrei;

// console.log(andrei)
// console.log(name)
// console.log(age)


// const func = ({age, name}) => {
//     console.log(`Name is ${name} and age is ${age}`)
// }

// func({name: 'Victor', age: 34})

// let str = 'str'

// function func() {
//     var str1 = 'str1'
//     console.log(str)

//     function func1 (arg) {
//         var str3 = 'str3'
//         console.log(str1, str3, str, arg)
//     }
//     return func1;
// }

// str = 'strnew'

// func()('test');

// const condtion = false

// if (condtion) {
//     var str2 = 'str2'
// }

// console.log(str2)

// const time = 15000;

// 1week 5days
// 4days 10hours
// 7hours 50minutes
// less than an hour

// const week = 10080
// const day = 1440

// const timeFormat = (remaningTime) => {
//     if(remaningTime/week >= 1) {
//         const weekMark = Math.floor(remaningTime/week) !== 1 ? 'weeks' : 'week'
//         const dayMark = (remaningTime%week)/day > 1 ? 'days' : 'day'
//         return `${Math.floor(remaningTime/week)}${weekMark} ${Math.floor((remaningTime%week)/day)}${dayMark}`
//     }

// }

// console.log(timeFormat(time))

