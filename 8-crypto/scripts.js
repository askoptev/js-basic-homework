function firstReverse(passwordArray) {
  let middleArray = passwordArray.splice(0, 4);
  middleArray.reverse();
  passwordArray = middleArray.concat(passwordArray);       
  return passwordArray;
};

function secondReverse(passwordArray) {
  let middleArray = passwordArray.splice(4);
  middleArray.reverse();
  passwordArray = passwordArray.concat(middleArray);   
  let endSection = passwordArray.splice(5);
  middleArray = endSection.slice(0, 2);
  middleArray.reverse();
  passwordArray = passwordArray.concat(middleArray);
  passwordArray.push(endSection.at(-1));
  return passwordArray;
};

function crypto(password) {
  if (!password || typeof password !== 'string') { return false };
  let passwordArray = password.split('');  
  if (passwordArray.length >= 4) {    
    passwordArray = firstReverse(passwordArray);   
  };
  if (passwordArray.length >= 8) {    
    passwordArray = secondReverse(passwordArray);    
  };
  return passwordArray.join('');
}

function check(cryptoPassword, password) {
  if (!password || typeof password !== 'string') { return false };
  if (!cryptoPassword || typeof cryptoPassword !== 'string') { return false };
  let passwordArray = cryptoPassword.split('');  
  if (passwordArray.length >= 4) {    
    passwordArray = firstReverse(passwordArray);     
  } else {
    return false;
  };
  if (passwordArray.length >= 8) {    
    passwordArray = secondReverse(passwordArray);    
  } else {
    return false;
  };
  const decryptedPassword = passwordArray.join('');
  if (decryptedPassword !== password) { return false };
  return true;
}

const password = 'password';
const wrongPassword = 'wrong'
const cryptoPassword = crypto(password);
const checkPassword = check(cryptoPassword, password);
const checkWrongPassword = check(cryptoPassword, wrongPassword);

console.log(`Зашифрованный пароль: ${cryptoPassword}`);
console.log(`Проверка истинного пароля: ${checkPassword}`);
console.log(`Проверка ложного пароля: ${checkWrongPassword}`);