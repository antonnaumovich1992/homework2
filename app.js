(function(){
'use strict'



let allPupils = [];
let pupil;

let averageMarks = (array) => array.reduce((a, b) => a + b) / array.length;

function isInteger(num) {
  return (num ^ 0) === num;
}


function Pupils(name){
  this.name = name;
  this.lastName = name.substring(name.search(' '), name.length);
  // this.marks = marks;
  // this.average = averageMarks(this.marks);
}

do {
    pupil = new Pupils(prompt('Введите Имя и Фамилию ученика через пробел, leave empty or press cancel to finish'));
        if ( pupil.name === '' || pupil.name === null){
            alert ('Ввод учеников завершен');
            break;
        } else if ((pupil.name).indexOf(' ') > -1){
            allPupils.push(pupil);                
        } else 
            alert ('Вводите имя и фамилию через пробел');         
} while (true);

const DIGITS = [0,1,2,3,4,5,6,7,8,9,10];

(function addMarks(){
  for (var i = 0; i < allPupils.length; i++) {
    let inputMarks = prompt(`Введите оценки ученика по имени ${allPupils[i].name} через пробел`).trim().split(' ')
                    .filter(value => value)
                    .map(value => Number(value));
         if (inputMarks.every(num => DIGITS.includes(num))){
      // if (inputMarks.every(element => (element^0) === element) && (inputMarks.every(element => ((element <= 10) && (element >=0))))){
                allPupils[i] = Object.assign(allPupils[i], {
                marks: (inputMarks)    
                });
      } else {
        
        return addMarks();
      }
  }
}());

for (var i = 0; i < allPupils.length; i++) {
  
  allPupils[i] = Object.assign(allPupils[i], {
      averageMark: averageMarks(allPupils[i].marks)     
  });
}




// console.log(allPupils);

function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {

      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

const DIGITS2 = ['123'];
let sortedPupils;
let sortValue;
(function sorted(){
// let sortedPupils;
do {
  sortValue = prompt('Введите способ сортировки таблицы: 1 - Имя, 2 - Фамилия, 3 - Средний балл. ');
} while (sortValue.split('').some(symbol => DIGITS2.includes(symbol))); 
    switch (sortValue){
      case '1':
        return sortedPupils = allPupils.sort(dynamicSort('name'));
        // break;
      case '2':
        return sortedPupils = allPupils.sort(dynamicSort('lastName'));
        // break;
      case '3':
        return sortedPupils = allPupils.sort(dynamicSort('averageMark'));
      default: 
        return sorted();
  }
}());
// sortedPupils = allPupils.sort(dynamicSort('averageMark'))
console.log(sortedPupils);
// objs.sort((a, b) => a.last_nom.localeCompare(b.last_nom));



// function sortObject(obj) {
//     return Object.keys(obj).sort().reduce((result, key) => (result[key] = obj[key], result), {});
// }
// console.log(sortObject(allPupils));






// }());
// let pupilNames = [];
// let pupilMarks = {};
// let allPupils;

// let pupilName;

// do {
//     pupilName = prompt('Введите Имя и Фамилию ученика, leave empty or press cancel to finish');
//         if ( pupilName === '' || pupilName === null){
//             alert ('Ввод учеников завершен');
//             break;
//         } else {
//             pupilNames.push(pupilName);
//         }
    
// } while (true);



// console.log(pupilNames);

/*проверка на целое число*/
// function isInteger(num) {
//     return (num ^ 0) === num;
//   }


// (function askMarks(){
// for (let i=0; i < pupilNames.length; i++){
//     pupilMarks[i] = prompt(`Введите оценки ученика по имени ${pupilNames[i]} через пробел`).trim().split(' ')
//     .filter(value => value)
//     .map(value => Number(value));
//     }
    
// }());

        
// console.log(pupilMarks);

// function Arr2object(keys, vals) {
//     return keys.reduce(
//       function(prev, val, i) {
//         prev[val] = vals[i];
//         return prev;
//       }, {}
//     );
//   }
  
//   console.log(Arr2object(pupilNames, pupilMarks));
// allPupils = Arr2object(pupilNames, pupilMarks);

// console.log(allPupils);



// keys = Object.keys(allPupils),
//   i, len = keys.length;

// keys.sort();

// for (i = 0; i < len; i++) {
//   k = keys[i];
//   console.log(k + ':' + allPupils[k]);
// }


// сортировка по имени
// function sortObject(obj) {
//     return Object.keys(obj).sort().reduce((result, key) => (result[key] = obj[key], result), {});
// }

// console.log(sortObject(allPupils));


// function average() {
//     let sum = 0;

//     for (let i = 0; i < arguments[i]; i++ ) sum += arguments[i];

//     return sum == 0 ? sum : sum / arguments.length;
// }





}());