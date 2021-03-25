
const nomePetshop = "PETSHOP AVANADE";
let pets=[
    { 
    nome:'Pingo',
    tipo: 'cachorro',
    idade: 3,
    raça: 'Pinscher',
    peso: 3,
    tutor: 'Eliane',
    contato: '(81) 98378-7555',
    vacinado:true,
    serviços: ['banho','tosa']
    
},
{ 
    nome:'Chica',
    tipo: 'coelho',
    idade: 1,
    raça: ' mini coelho Lion',
    peso: 2,
    tutor: 'David',
    contato: '(81) 98850-7822',
    vacinado:true,
    serviços: ['banho','corte e unha']
    
},
{ 
    nome:'Apola',
    tipo: 'cachorro',
    idade: 6,
    raça: 'Pastor Alemão',
    peso: 9,
    tutor: 'Manoel',
    contato: '(81) 98817-6577',
    vacinado:true,
    serviços: ['banho']
    
}
];

 const listarPets = () => {
     for(let i = 0 ; 1 < pets.length; i++)
     {
       console.log(pets[i].nome);
     }
    

 }
 listarPets();
//console.log(pets);