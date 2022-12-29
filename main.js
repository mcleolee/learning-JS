
console.log('fuck you');
console.error('this is an error');
console.warn('this is a warning');


// Variables
// var, let, const
// let 可以改变值，const不可以改变值
let age = 69;
console.warn(age);

// Data Types
// String, Numbers, Boolean, null, undefined, Symbols
const nameMe = 'John';
const ageJohn = 30;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z;  
console.log(typeof ageJohn);

// concatination
console.log('My name is ' + nameMe + ' and I am ' + ageJohn+ ' years old.');
// template string
const hello = (`my name is ${nameMe} and I am ${ageJohn} years old.`);
console.log(hello);

// String
const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase(s));
console.log(s.toLowerCase(s));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''))

const tech = 'technology, computers, it, code';
console.log(tech.split(', '));

// Arrays 
// Arrays are variables that hold multiple values
// 不太好的方式创建数组
const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'pears', 10, true];
fruits[3] = 'grapes';
fruits.push('mangos'); // add to the end
fruits.unshift('strawberries'); // add to the beginning
fruits.pop(); // remove the last element

console.log(fruits); // use [1] to get the second element
console.log(Array.isArray(fruits)); // check if it is an array
console.log(Array.isArray(ageJohn));
console.log(fruits.indexOf('oranges')); // find the index of the element
// -------------------end of array------------------

// Object Literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA '
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstName, lastName} = person;
console.log(firstName);

person.email = 'raven42lee@outlook.com'
console.log(person.email);

const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appt',
        isCompleted: false
    },
];

console.log(todos[1].text);

// JSON
// JSON里咩有单引号，会报错。
// 而上面的 todos 转换成 JSON 后就只是把id，text等属性 和 字符串加上双引号

// 这个方法可以转换为 JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// For
for(let i = 0; i < 3; i++){
    // console.log(i);
    console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while(i < 3){
    console.log(`While Loop Number: ${i}`);
    i++;
}

// Loop through array
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].id, todos[i].text);
}

console.log('----------------------')
// better way to loop through array
for(let todo of todos){
    console.log(todo.id, todo.text)
}

// forEach, map, filter
// forEach
todos.forEach(function(todo) {
    console.log(todo.text);
})

// map
const todoText = todos.map(function(todo) {
    return todo.text;
})
console.log(todoText);

// filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted); 

// Conditionals
// == 会自动转换类型
// === 不会自动转换类型
// or ||, and &&
const xx = 10;
if(xx == 10){   
    console.log('xx is 10');
} else if(xx > 10){
    console.log('xx is greater than 10');
}else{
    console.log('xx is less than 10');
}

// Ternary Operator 三元运算符 
const q = 10;
const color = q > 10 ? 'red' : 'blue';

// Switch
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
}

// Functions
function addNums(num1, num2){
    // console.log(num1 + num2);
    return num1 + num2;
}

console.log(addNums(60,9));
// NaN: not a number

// Arrow Function
const addNums2 = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums2(90,6));

todos.forEach((todo) => console.log(todo));

// 面对对象编程
// Constructor Function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    

    // this.getBirthYear = function(){
    //     return this.dob.getFullYear();
    // }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
// instatiate object 实例化对象
const person1 = new Person('John', 'Doe', '4-17-2000');
console.log(person1);
// console.log(person1.dob);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// prototype
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
console.log(person1)

// Class
// 比较新的方法，相对于 prototype 更简洁
class Person2{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// DOM
// document object model

// Single element
console.log(window);


const form = document.getElementById('my-form')

function cl(sth){
    console.log(sth);
}

cl(form)

// querySelector 只选择一个，如果有多个，只选择第一个
// 用 qS 时，需要加 . 选择类，需要加 # 选择 id 
const h1 = document.querySelector('h1')
cl(h1)

// Multiple element
cl(document.querySelectorAll('.item'))
// 不需要.  因为这里是选择类
cl(document.getElementsByClassName('item'))

cl(document.getElementsByTagName('li'))

// loop through items
const items = document.querySelectorAll('.item')
items.forEach((item) => cl(item))

// Manipulating the DOM
const ul = document.querySelector('.items')


// 删掉 ul
    //ul.remove()
// 删掉第一个 li
    //ul.firstElementChild.remove()
// 删掉最后一个 li
    //ul.lastElementChild.remove()
// 删掉第二个 li
    // ul.children[1].remove()

ul.firstElementChild.textContent = 'pussy'
ul.children[1].innerText = 'Brad'
ul.lastElementChild.innerHTML = '<h1>hello</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'lightblue';

// Events
// click, mouseover, mouseout, mousedown, mouseup, keydown, keyup, keypress, focus, blur, cut, paste, input, change
btn.addEventListener('mousepress', (e) => {
    e.preventDefault();
    
    /* 一些事件
    cl('click')
    cl(e.target.className)
    */

    // 来点帅气的
    document.querySelector('#my-form')
    .style.background = '#ccc'

    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello</h1>'
})

// Form Script
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault()

    // cl(nameInput.value);

    // 验证两个输入框是否为空
    if(nameInput.value === '' || emailInput.value === ''){
        // 不用 alert，因为 alert 会阻止页面的加载
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
    
}