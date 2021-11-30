const somar = (a: number, b: number) => a + b;
console.log(somar(5, 5));

// interface - Contrato para implementar suas classes 

interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface Felino extends Animal {
    visaoNorturna: boolean;
}

interface Canino extends Animal {
    porte: 'pequeno' | 'medio' | 'grande'
}

// types - Validação de tipos 

type Domestico = Felino | Canino;


const felino: Domestico = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNorturna: true,
    domestico: false
}

const animal: Domestico = {
    nome: 'Elefante',
    tipo: 'terrestre',
    visaoNorturna: false,
    domestico: false
}