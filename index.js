const moment= require('moment')

const nomePetshop = "PETSHOP-JS";

let pets = [
    {
        nome: 'Pingo',
        tipo: 'cachorro',
        idade: 4,
        raca: 'Pischer',
        peso: 5,
        tutor: 'Ana',
        contato: '(81) 98358 -5040',
        vacinado: true,
        servicos: ['tosa', 'vacina', 'banho']
    },
    {
        nome: 'Apolo',
        tipo: 'Cachorro',
        idade: 5,
        raca: 'Pastor Alemão',
        peso: 9,
        tutor: 'Manoel',
        contato: '(81) 98578 7553',
        vacinado: false,
        servicos: 'Banho'
    },
    {
        nome: 'Chica',
        tipo: 'Coelho',
        idade: 1,
        raca: 'Lion mini',
        peso: 2,
        tutor: 'David',
        contato: '(81) 9817 7068',
        vacinado: true,
        servicos: 'corte de unha'
     }
];

const listarPets = () => {
    // for(let i = 0; i < pets.length; i++){
    for(let pet of pets){
        
        console.log(`${pet.nome}, ${pet.idade}, ${ pet.tipo}, ${pet.raca}`);
    }
}


const vacinarPet = () => {
           if(!pet.vacinado)
        {
            pet.vacinado = true
            console.log(`${pet.nome} foi vacinado com sucesso!`);
            }
            else
            {
              console.log(` Ops, ${pet.nome} já está vacinado!`);
            }
        }
    


const campanharVacina = () => {
    console.log("Campanha de vacina 2020");
    console.log("vacinando...");
    let cont = 0;
    for(let pet of pets)
    {
        if(!pet.vacinado)
        {
            pet.vacinado (pet);
            cont++;
        }
    }
    console.log(`${cont} pets foram vaciados nessa campanha!`)
};
const adicionarPet = novoPet => {
    if (typeof novoPet == "object" && validarDados(novoPet)) {
        // adiciona o pet
        novoPet.nome = String(novoPet.nome);
        novoPet.idade = parseInt(novoPet.idade);

        if (!novoPet.servicos) {
            novoPet.servicos = [];
        }

        pets.push(novoPet);
    } else {
        console.log("Ops, insira um argumento valido!");
    }
}

const darBanhoPet = pet => {
    pet.servicos.push({
        'serviço':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = pet => {
    pet.servicos.push({
        'serviço':'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = pet => {
    pet.servicos.push({
        'serviço':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas aparadas!`);
};


darBanhoPet(pets[0]);
console.log(pets[0]);
    
    
      
     

