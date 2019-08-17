(function(){
'use strict'



let allPupils = [];
let pupil;

let averageMarks = (array) => array.reduce((a, b) => a + b) / array.length;

function Pupils(name){
  this.name = name;
  this.lastName = name.substring(name.search(' '), name.length);
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


console.table(sortedPupils);

/*
console.log(
  '\u250C'  + '\u2500'+ '\u2500'+ '\u2500'+ '\u2500'+ '\u2500' + '\u2500'+'\u2500'
)
*/
}());