const moment= require('moment');
const nomePetshop =" PETSHOP-JS"
const bancoDados = require('./bancoDados.json');

let pets = bancoDados.pets

const listarPets=()=>{
for(let pet of pets){
console.log(`${pet.nome}, ${ pet.tipo}, ${pet.raca}`);
}
console.log('--------x--------')
}
 
 const vacinarPet =(pet)=> {
    for(let pet of pets){
   var vacinado = pet.vacinado == true? 'Já está Vacinado!': 'vacinado com sucesso!' //if ternaria
   console.log(`${pet.nome}, ${vacinado}`)
    }
    console.log('------------x-----------') 
   let cont= 0;
   let conta = 0;
   for(let pet of pets)
   {
     let contador = pet.vacinado == true? cont++: " ";
     let contando =pet.vacinado == false? conta++: ""
     
    } 
    let soma= cont + conta
    console.log(`Total de pets vacinados : ${soma} `)
    
    
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
vacinarPet()
//banhoPet(pets[1]);
//tosarPet(pets[1]);
//unhaPet(pets[1]);


console.log("-----------")
listarPets();
