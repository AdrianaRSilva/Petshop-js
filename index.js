const moment= require('moment')

const nomePetshop = "PETSHOP AVANADE";

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

const campanharVacina = () => {
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
 const adicionarPet = () => {
      
        let novoPet={
            nome:'xena',
            tipo: 'Gato',
            idade: 4,
            raca: 'Vira-lata',
            peso: 10,
            tutor: 'Maria',
            contato:'(81) 9856-4720',
            vacinado: false,
            servicos: ['banho', 'tosa']   
        }
        pets.push(novoPet);
       
     }
     
     const darBanhoPet =() =>{
        let nomep = "Pingo";
        for(let pet of pets){
        
            if(pet.nome== nomep){
                pet.servicos.push("banho");
                console.log(`${pet.nome}, Banho ok!`)
                console.log(`este serviço ocorreu em ${moment().format('L')}`)
            }
        }
        
     }
     const tosarPet=()=>{
        let nomep= "Pingo";
    
        for(let pet of pets){
            
            if(pet.nome == nomep){
                pet.servicos.push("tosa");
                console.log(`${pet.nome}, está tosada!`)
                console.log(`este serviço ocorreu em ${moment().format('L')}`)
            }
        }
    
     }
     const apararUnhasPet=()=>{
        let unhap= "Pingo";
    
        for(let pet of pets){
            
            if(pet.nome == unhap){
                pet.servicos.push("tosa");
                console.log(`${pet.nome}, Unha cortada!`)
                console.log(`este serviço ocorreu em ${moment().format('L')}`)
            }
        }
    
     }
     
        listarPets();
        campanharVacina();
        adicionarPet();
        tosarPet();
        darBanhoPet();
        apararUnhasPet();


    
    
      
     

