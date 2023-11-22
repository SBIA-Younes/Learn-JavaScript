const obj = {
  // index:value
  pseudo: 'From Sceatch',
  ville: 'Bordeaux'
}
// ----------
// Ajouter
// ----------
obj.age = 24 // {pseudo: 'From Sceatch', ville: 'Bordeaux', age: 24}
// console.log(typeof obj); // object

// ----------
// Supprimer
// ----------
delete obj.ville // {pseudo: 'From Sceatch', age: 24}

// ----------
// Modifier
// ----------
obj.pseudo = 'Modifier'; // {pseudo: 'Modifier', age: 24}

// ----------
// Ajouter
// ----------
obj['admin'] = false; // {pseudo: 'Modifier', age: 24, admin: false}


let array = [1,2,3]

// console.log(typeof array); // object

// console.log(typeof document.body); // object
// console.log(typeof null); // object


// ---------------------------
// Checker si propriete existe
// ---------------------------
// console.log(obj.hasOwnProperty('pseudo')); // true
// console.log(obj.hasOwnProperty('pseudo2')); // false
// console.log('pseudo' in  obj); // true

// console.log(obj.propertyIsEnumerable('pseudo')); // true
// console.log(obj.propertyIsEnumerable('pseudo2')); // false

// ---------------------------
// Parcourir l'object
// ---------------------------
for (const key in obj) {
  // console.log(key);
  // console.log(obj[key]);
}


const obj2 = {
  // index:value
  pseudo: 'Youbra',
  ville: 'Bordeaux',
  
  direBonjour() {
    console.log('Bonjour ' + this.pseudo); // obj.pseudo
  },
  
  direBonsoir: function () {
    console.log('Bonsoir ' + this.ville); // obj.ville
  }
}
// obj2.direBonjour(); // Bonjour From Sceatch
// obj2.direBonsoir(); // Bonsoir Bordeaux

// ---------------------------
// Obtenir les cles
// ---------------------------
const keys = Object.keys(obj2); // (4) ['pseudo', 'ville', 'direBonjour', 'direBonsoir']

const values = Object.values(obj2); // (4) ['From Sceatch', 'Bordeaux', ƒ, ƒ]

const nestedArray = Object.entries(obj2); // (4) [Array(2), Array(2), Array(2), Array(2)]

// ---------------------------
// Fudionner objects
// ---------------------------
const fusion = Object.assign({}, obj, obj2); // {pseudo: 'From Sceatch', age: 24, admin: false, ville: 'Bordeaux', direBonjour: ƒ, …}

// ---------------------------
// Empecher les modifications
// ---------------------------

// const newObj = Object.freeze(obj);

// newObj.pseudo = 'Youbra'; // {pseudo: 'Modifier', age: 24, admin: false}
// newObj.addresse = '42 Plateux Sentremy'; // {pseudo: 'Modifier', age: 24, admin: false}

// ---------------------------
// Empecher l'ajoute de parametre
// ---------------------------
const newObj2 = Object.seal(obj);
newObj2.age = 654; // {pseudo: 'Modifier', age: 654, admin: false}
newObj2.addresse = '42 Plateux Sentremy'; // {pseudo: 'Modifier', age: 654, admin: false}


// ---------------------------
// Constructeur d'objets
// ---------------------------

// Fomction constructeur
function Personne(pseudo, age, admin) {
  this.pseudo = pseudo;
  this.age = age;
  this.admin = admin;

  this.print = function () {
    console.log('pseudo : ' + this.pseudo +', Age : ' + this.age +' ans, Administrateur :' + this.admin);
  }
}

const user1 = new Personne('Youbra', 29, true); // Personne {pseudo: 'Youbra', age: 29, admin: true, print: ƒ}
// console.log(user1.pseudo); // Youbra
// user1.print() // pseudo : Youbra, Age : 29 ans, Administrateur :true


// ---------------------------
// Factory function
// ---------------------------

function User2(pseudo, age, admin) {
  return {
    pseudo,  // pseudo: pseudo
    age,    //  age: age
    admin, //   admin: admin
    
    print: function () {
      console.log('pseudo :'+ this.pseudo +', Age :'+ this.age +' ans, Administrateur :' + this.admin);
    }
  }
}

const user3 = User2('Youbra', 29, false); // {pseudo: 'Youbra', age: 29, admin: false, print: ƒ}
// user3.print() // pseudo :Youbra, Age :29 ans, Administrateur :false

// ---------------------------
// Les class
// ---------------------------

class Utilisateur {
  
  constructor(pseudo, age, admin) {
    this.pseudo = pseudo;
    this.age = age;
    this.admin = admin;
  }

  print = function () {
    console.log('pseudo :'+ this.pseudo +', Age :'+ this.age +' ans, Administrateur :' + this.admin);
  }
}

const user4 = new Utilisateur('Sarrah', 25, true);

Utilisateur.prototype.sayMyName = function () {
  console.log("c'est mon pseudo :" + this.pseudo);
}

// user4.sayMyName() // c'est mon pseudo :Sarrah

// Les methode declaree haur prototype sont  plus lente

Object.assign(Utilisateur.prototype, {
  methode1() {
    // Ma Methode
  },
  methode2() {
    // Ma Methode
  }
}) 

  // ---------------------------
  // L'heritage
  // ---------------------------

  class Animal {
    constructor(name,age) {
      this.name =name;
      this.age = age;
    }
    saySomething(text) {
      console.log(this.name + ' dit : ' + text);
    }
  }

  class Cat extends Animal {
    // constructor(name,age) {
    //   super(name,age);
    // }
    // saySomething(text) {
    //   super.saySomething(text);
    //   console.log(this.name +' meow ');
    // }

    run() {
      console.log('Le Chat il mange ');
    }
  }

  const rintintin = new Cat('Rintintin', 5)

  console.log(rintintin);