let srting = 'Chaine';
let number = 25;
let boolean = true;
// let maVariable; // type Umdefined
let maVariable = null; 

// console.log(typeof maVariable);

// Tableaux
let array = ['Bordeaux', 'Toulouse', 'Nantes'];
// console.log(array[0][3]); 

let array2 = ['Bordeaux', 24, true, [1,2], {nom:'Denis'}];
// console.log(array2[3][1]); // 2
// console.log(array2[4].nom); // Denis

let object = {
  pseudo : 'Denis',
  age : 29,
  technos : ['JavaScript', 'React', 'NodeJs'],
  admin : false,
};
// console.log(object.age); // 29
// console.log(object.technos[0][1]); // a 

object.add = 'Add';
// console.log(object.add); // Add

let data = [
  {
    pseudo : 'Denis',
    age : 29,
    technos : ['JavaScript', 'React', 'NodeJs'],
    admin : false,
  },
  {
    pseudo : 'Samia',
    age : 25,
    technos : ['Python', 'React', 'NodeJs'],
    admin : false,
  },
  {
    pseudo : 'Nikola',
    age : 42,
    technos : ['Java', 'React', 'NodeJs'],
    admin : true,
  }
]

// -------------------------
// Les Structure de controle
// -------------------------

if (data[2].age > data[1].age) {
  // console.log('La personne la plus vieille est ' + data[2].pseudo + ' avec un age de ' + data[2].age + ' par a port a ' + data[1].pseudo + ' qui a un age de ' + data[1].age)
}

let html = '';

// Les boocles for
// for (const user of data) {
//   html += `<li>${user.pseudo} - ${user.age} ans</li>`
// }

// for (i = 0; i < data.length; i++) {
//   html += `<li> ${data[i].pseudo} - ${data[i].technos.join(' / ')} </li>`
// }

// document.body.innerHTML += html;

document.body.addEventListener('click', (e)=> {
  console.log(e.target.id);

  // if (e.target.id == 'javascript') {
  //   document.body.style.background = 'yellow';
  // }
  
  switch (e.target.id) {
    case 'javascript':
      document.body.style.background = 'yellow';
      break;
      
    case 'python':
      document.body.style.background = 'blue';
      break;

    case 'java':
      document.body.style.background = 'orange';
      break;
        
    default:
      null
      break;
  }
})

// Methodes String
let string2 = 'Javascript est un longage oriente objet';

// console.log(parseInt('1') + 2); // 3
// console.log(isNaN(string2)); // true
// console.log(string2[string2.length -1]); // t
// console.log(string2.indexOf('l')); // 18 
// console.log(string2.indexOf('x')); // -1 => retourne -1 s'il ne connais pas 

// let newString = string2.slice(10); // est un longage orient
// let newString = string2.slice(5, 17); //cript est un

// console.log(string2.split('i'));

// ---------------------
// Methodes Numbers
// ---------------------

let number2 = 42.1234;
let numberString = '42.12 est un chiffre';

// console.log(number2.toFixed(2)); // 42.12
// console.log(parseInt('42')); // 42
// console.log(parseInt(numberString)); // 42
// console.log(parseFloat(numberString)); // 42.12

// Math
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.round(number2)); // 42
// console.log(Math.floor(number2)); // 42
// console.log(Math.ceil(number2)); // 43
// console.log(Math.pow(2,7)); // 128
// console.log(Math.sqrt(16)); // 4
// console.log(Math.floor(Math.random() * 50)); // 0 <br > 50

// ---------------------
// Methodes Arrays 
// ---------------------

let array3 = ['JavaScript', 'React', 'NodeJs'];
let array4 = ['Python', 'Django'];

// let newArray = array3.concat(array4); // ["JavaScript","React","NodeJs","Python","Django"]
// let newArray = [...array3, ...array4]; // ["JavaScript","React","NodeJs","Python","Django"]
// console.log(array3.join(' - ')); //  JavaScript - React - NodeJs
// console.log(array3.slice(1)); // ['React', 'NodeJs']
// array3.forEach((languages) => console.log(languages));

// console.log(array3.some((languages) => languages == 'React')); // true
// let shift = array3.shift(); // ['React', 'NodeJs'] , remove first element
// console.log(array3.pop()); // NodeJs , Removes the last element from an array and returns it

// const restArray = array3.splice(0,1,'c++'); // array3 = ['c++', 'React', 'NodeJs']
// const restArray = array3.splice(0,1,...array4); // array3 = ['Python', 'Django', 'React', 'NodeJs']

// !! IMPORTANT //

let arrayNumber = [4, 74, 28, 12,1];
// console.log(arrayNumber.reduce((x,y) => x +y)); // 119

// arrayNumber.push(17); // [4, 74, 28, 12,1, 17]

// !! FILTER, SORT, MAP


// console.log(arrayNumber.filter((number) => number > 10)); // [74, 28, 12]


// console.log(arrayNumber.sort((a,b) => a - b)); // [1, 4, 12,, 28 74]
// console.log(arrayNumber.sort((a,b) => b - a)); // [74, 28, 12, 4, 1]

// console.log(arrayNumber.filter((number) => number > 10).sort((a,b) => b - a)); // [74, 28, 12]
// console.log(arrayNumber.filter((number) => number > 10).sort((a,b) => a - b)); // [12, 28, 74]


// console.log(arrayNumber.map((number) => number * 2)); // [8, 148, 56, 24, 2]

// document.body.innerHTML += arrayNumber.map(
//   (number) => `<li> ${number} </li>`
// ).join('-------')

// ------------------
// Methodes Objects
// ------------------

// document.body.innerHTML = data
// // .filter((user) => user.admin === false)
// // .filter((user) => user.pseudo.includes('a'))
// .sort((a, b) => b.age - a.age)
// .map((user) => `
//   <div class='user-card'> 
//     <h2> ${user.pseudo} </h2>
//     <p>Age : ${user.age} ans </p>
//     <p>Status : ${user.admin ? 'Moderateur' : 'Mombre' } </p>
//   </div>
//   `
// ).join('')

// ------------------
//  Les Dates 
// ------------------

// Date classique
let date = new Date(); // Thu Nov 16 2023 08:50:54 GMT+0100 (heure normale d’Europe centrale)

// Timstamp
let timestamp = Date.parse(date); // 1700121024000

let iso = date.toISOString(); // 2023-11-16T07:51:26.569Z


function dateParser (chaine){
  let newDate = new Date(chaine).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
  return newDate
}

// console.log(dateParser(date)); // 16 novembre 2023 à 08:56:45
// console.log(dateParser(timestamp)); // 16 novembre 2023 à 08:57:15
// console.log(dateParser(iso)); // 16 novembre 2023 à 08:59:17

// ------------------
// Destructuring
// ------------------

let moreData = {destVar: ['Element 1','Element 2']}

const {destVar} = moreData; // destVar = moreDate.destVar

// console.log(moreData.destVar); // (2) ['Element 1', 'Element 2']
// console.log(destVar); // (2) ['Element 1', 'Element 2']

let array5 = [70, 90, 80];

const [a, b, c] = array5; // a = 70, b = 90, c = 80

// console.log(iso);
const dateDestructuring = (chaine) => {
  let newDate = chaine.split('T')[0]
  let [y, m, d] = newDate.split('-');
  console.log(y);
  console.log(m);
  console.log(d);
  return [d,m,y].join('/') // 16/11/2023
}

// console.log(dateDestructuring(iso));

//  -----------------
// Les Datasets
//  -----------------


const h3js = document.getElementById('javascript');

// console.log(h3js.dataset.lang); // js

const h3 = document.querySelectorAll('h3');
// h3.forEach((langue) => console.log(langue.dataset.lang)) // js jv py


// ------------------
// Regex
// ------------------

let mail = 'from_scratch33@gmail.com';
// console.log(mail.search(/gmail.com/));// Si la chaîne est trouvée, la fonction searsh retourne l'index de début de la chaîne trouvée. Sinon, elle retourne -1.

// console.log(mail.replace(/gmail/ , 'hotmail')); // from_scratch33@hotmail.com

// console.log(mail.match(/SCratch/)); // null
// console.log(mail.match(/SCratch/i)); // true [...]

// console.log( mail.match(/[zug]/)); // ['g', ...]

// Tous les chiffres
// console.log(mail.match(/\d/)); // [3, ...]

// Matcher touts les lettres
// console.log(mail.match(/[a-z]/)); // ['f', ...]

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,5}$/i)); // ['from_scratch33@gmail.com', ...]


let separator = 265264849;

// console.log(typeof separator.toString()); // string
// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')); // 265 264 849

