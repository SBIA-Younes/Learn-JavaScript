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
  console.log('La personne la plus vieille est ' + data[2].pseudo + ' avec un age de ' + data[2].age + ' par a port a ' + data[1].pseudo + ' qui a un age de ' + data[1].age)
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

