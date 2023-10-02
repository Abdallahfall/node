const fs = require('fs');
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('Le fichier "welcome.txt" a été créé avec succès.');
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenu du fichier "welcome.txt":', data);
  });
});