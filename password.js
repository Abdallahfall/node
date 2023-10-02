const generate = require('generate-password');

function generateRandomPassword() {
  const passwordOptions = {
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true, 
    excludeSimilarCharacters: true,
  };
  const password = generate.generate(passwordOptions);
  console.log('Mot de passe généré :', password);
}
generateRandomPassword();