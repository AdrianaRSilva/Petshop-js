const moment= require('moment');
const nomePetshop =" PETSHOP-JS"
const bancoDados = require('./bancoDados.json');

let pets = bancoDados.pets

const listarPets=()=>{
for(let pet of pets){
console.log(`${pet.nome}, ${ pet.tipo}, ${pet.raca}, ${pet.vacinado}`);
}
}
 
 const vacinarPet =( )=> {
    for(let pet of pets){
     if(!pet.vacinado)
     {
         pet.vacinado = true
         console.log(`${pet.nome}, vacinado com sucesso `);
     }
     else
     console.log(`Ops,${pet.nome}, ja esta vacinado`);
    console.log("Vacinado ...");
    
     let cont= 0;
     for(let pet of pets)
    {
        if(pet.vacinado == true)
         {
            cont ++ ;
        }
   }
console.log(`${cont} Pets vacinado!`);
}

 const novoCliente = () =>{
 let novoPet={
  nome: " princesa",
  tipo: "cachorro",
  peso:  4,
  raca:"viralata",
 tutor: "Marcos",
 contato: "(81) 98500-8454",
 vacinado: true,
 servicos:['vacina','banho','tosa','corta unha']
         } 
         pets,push(novoPet);
        }

    
    const banhoPet = pet => {
        pet.servicos.push({
            'serviço':'banho',
            'data': moment().format('DD-MM-YYYY')
        });
        console.log(`${pet.nome} está de banho ok!`);
    };
         const tosarPet = pet =>{
            pet.servicos.push({
             ' serviço ': 'tosa', 
             'data': moment().format('DD-MM-YYYY')
             });
             console.log(`${pet.nome} está com pelos ok :)`);
            };
             const unhaPet = pet =>
             {
                pet.servicos.push({
                 ' serviços ': 'corta unha', 
                 'data': moment().format('DD-MM-YYYY')
                 });
                 console.log(`${pet.nome} está com unhas ok :`);  
                };
 }

//console.log(pets[1]);
listarPets();
vacinarPet(pets[1]);
//banhoPet(pets[1]);
//tosarPet(pets[1]);
//unhaPet(pets[1]);


console.log("-----------")
listarPets();
