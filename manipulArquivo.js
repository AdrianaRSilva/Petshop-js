  
let fs = require('fs'); //filesystem - modulo nativo

//pega conteudo do arquivo e converte pra utf-8
let bancoDados = fs.readFileSync('bancoDados.json', 'utf-8');

//converte o conteudo
bancoDados = JSON.parse(bancoDados);
bancoDados.pets.push({ 
        "nome": "pitoco",
        "tipo": "gato",
       "peso":  3,
        "raca": "vira lata",
        "tutor": "Angela",
        "contato": "(81) 98500-9090",
        "vacinado": true,
        "servicos":[]
                }
                 )
                 let petsAtualizado = JSON.stringify(bancoDados);

fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
               