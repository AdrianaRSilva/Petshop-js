
const nomeLoja= "PetShop-js"
const moment = require('moment');
const fs = require('fs');
let bancoDados = fs.readFileSync('./bancoDados.json', 'utf-8');

bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
    //conversão de objeto javascript para JSON
    let petsAtualizado = JSON.stringify(bancoDados, null, 2);
    //atualização do arquivo bancoDados.json
    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
}

const listarPets = () => {
    for (let pet of bancoDados.pets) {
        //template string
        console.log(`${pet.nome}, ${pet.idade} anos, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado'}`);

       }
}

const vacinarPet = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        atualizarBanco();
        let vacina = pet.vacinado
        vacina == true ? vacina = "foi vacinado com sucesso!": vacina ="já está vacinado!"; 
        
        console.log(`Ops, ${pet.nome} já está vacinado!`);
    }
}

const campanhaVacina = () => {
    console.log("Campanha de vacina 2020");
    console.log("vacinando...");

    let petVacinadosCampanha = 0;
    for (let pet of bancoDados.pets) {
        if (!pet.vacinado) {
            vacinarPet(pet);
            petVacinadosCampanha++;
        }
    }
    atualizarBanco();
    console.log(`${petVacinadosCampanha} pets foram vaciados nessa campanha!`);
};

const adicionarPet = novoPet => {
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}

const darBanhoPet = pet => {
    pet.servicos.push({
        'nome':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBanco();
    console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = pet => {
    pet.servicos.push({
        'nome':'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBanco();
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = pet => {
    pet.servicos.push({
        'nome':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBanco();
    console.log(`${pet.nome} está de unhas aparadas!`);
};
    const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome} seja bem vindo!`)
    servico(pet)
    console.log('volte smepore')
}


// darBanhoPet(bancoDados.pets[1]);

   
   // listarPets();
 atenderCliente()
  adicionarPet({
   "nome": "Pitoco",
     "tipo": "cachorro",
     "idade": 3,    
     "raca": "vira lata",
    "peso": 6 ,
    "tutor": "Eduardo",
   "contato": "(81) 9859-9070",
    "vacinado": true,
    "servicos": []})
  
    