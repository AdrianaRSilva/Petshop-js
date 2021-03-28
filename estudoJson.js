let bancoDados = require("./bancoDados.json")

let pets = bancoDados.pets;

console.log(bancoDados)
const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);

    //servico();
    (servico) ? servico(): console.log('só vim dar uma olhadinha.')
    console.log('Tchau, até mais!');
}

const darBanho = ()=> {
    console.log('dando banho no pet ...');
}

const apararUnhas = () => {
        console.log('Aparando unhas...');
}

atenderCliente(pets[0], darBanho);
console.log('-----------');
atenderCliente(pets[2], apararUnhas);
console.log('-----------');
atenderCliente(pets[1]);

