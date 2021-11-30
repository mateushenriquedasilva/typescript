// inputs
const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input', event => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value)
});

// generic types
function adicionaApendiceALista<NaoSei>(array: any[], valor: NaoSei) {
   return array.map(item => item + valor);
};

adicionaApendiceALista([1, 2, 3], 1);

// --------------------------------------

interface Usuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: Usuario){
    if(usuario.cargo){
        // redirecionar(usuario.cargo);
    }else{
        // redirecionar para a área do usuário
    }
}

// readonly and private
interface AnimalDomestico {
    readonly nome: string;
    readonly idade: number;
    readonly parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof AnimalDomestico]-?: AnimalDomestico[K]
}

class MeuCachorro implements AnimalDomestico {
     idade;
     nome;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);


// Omit
// https://www.typescriptlang.org/docs/handbook/utility-types.html
interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {
    UF: string;
}

const brasileiro: Brasileiro = {
    nome: 'Matheus H',
    idade: 20,
    UF: 'Pernambuco'
}