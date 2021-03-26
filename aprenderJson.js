const moment= require('moment')
const fs=require('fs');
const bancoDados=fs.readFileSync('dadoPets.json', 'utf8');

const nomePetshop =" PETSHOP-JS"

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
         console.log(`${pet.nome}, vacinado com sucesso `)
     }
     else
     console.log(`Ops,${pet.nome}, ja esta vacinado`)
 }
}
 
 const campanharVacina = () => {
    console.log("Campanha de vacinação 2021");
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

 const adicionarPet = novoPet =>
  {
    if (typeof novoPet == "object" && validarDados(novoPet))
{
    novoPet.nome = String(novoPet.nome);
    novoPet.idade =perseInt(novoPet.idade);
    if(!novoPet.servicos){
        novoPet.servicos =[];
        }
        pets.push(novoPet);
        }
        else{
            console.log(" insira um argumento valido!")

        }
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

//console.log(pets[1]);
listarPets(pets[1]);
//campanharVacina(pets[1]);
//vacinarPet(pets[1]);
//banhoPet(pets[1]);
//tosarPet(pets[1]);
//unhaPet(pets[1]);
console.log(dadosPet);
