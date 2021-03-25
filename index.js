const nomePetshop = "PETSHOP AVANADE";

let pets = [
    {
        nome: 'pingo',
        tipo: 'cachorro',
        idade: 4,
        raca: 'Pischer',
        peso: 5,
        tutor: 'Ana',
        contato: '(81) 98358 -5040',
        vacinado: true,
        servicos: ['tosa', 'vacina']
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
        servicos: ['Banho']
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
        // concatenacao vvv
        // console.log(pets[i].nome + " " + pets[i].raca);
        // template string vvv
        console.log(`O nome do pet é: ${pet.nome}`);
    }
}

const vacinarPet = () => {
    let nomev = "cachorro";
    for(let pet of pets){
        if(pet.nome == nomev)
        {
            if(pet.vacinado == true)
            {
                console.log(`Ops, ${pet.nome} já está vacinado!`);
            }
            else
            {
                pet.vacinado = true;
                console.log(`${pet.nome} foi vacinado com sucesso!`);
            }
        }
    }
}

const campanhaVacina = () => {
    let cont = 0;
    for(let pet of pets)
    {
        if(pet.vacinado == false)
        {
            pet.vacinado = true;
            cont++;
        }
    }
    console.log(`${cont} pets foram vaciados nessa campanha!`)
}

// listarPets();
// vacinarPet();
campanhaVacina();

// console.log(pet);