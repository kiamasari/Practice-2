'use strict';

// задание 1

let name = 'Джон';
let admin = name;

console.log(admin)

// задание 2

let nameCity = prompt('Из какого города вы?', 'пусто');
let ageCity = prompt('В каком году построилась?', 'пусто');
let numCity = prompt('Сколько человек в городе?', 'пусто');
let all = 2024 - ageCity;
let isTrue = confirm(`Городу ${nameCity} исполнилось ${all} лет с момента его образования. Население - ${numCity} человек`)

// задание 3

const p = 3.14;
let r = prompt('Введите радиус');
console.log(2*p*(r**2));

// задание 4

let a = Number(prompt('1 число'));
let b = Number(prompt('2 число'));
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);