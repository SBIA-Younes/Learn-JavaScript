const dataLowercase = 'qwertyuiopasdfghjklzxcvbnm';
const dataUpercase = dataLowercase.toUpperCase();
const dataNumbers = '0123456789';
const dataSymbols = '!@#$%&*()_+;:\'"\\|/.';
const rangeValue = document.getElementById('password-length');

const passwordOutput = document.getElementById('password-output');


function generatePassword () {
  let data = [];
  let password = '';

  if (lowercase.checked) data.push(...dataLowercase);
  if (upercase.checked) data.push(...dataUpercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);
  
  if (data.length === 0) {
    alert('Veuillez selectionner des criteres');
    
  } else {

    for (i = 0; i < rangeValue.value; i++) {
  
    password += data[Math.floor(Math.random() * data.length)];
    }
  }
  passwordOutput.value = password;
  passwordOutput.select()
  navigator.clipboard.writeText(passwordOutput.value);

  generateButton.textContent = 'copie !'

  setTimeout(
    () => generateButton.textContent = 'Générer mot de passe',
    1000
  )
}

generateButton.addEventListener('click', generatePassword)