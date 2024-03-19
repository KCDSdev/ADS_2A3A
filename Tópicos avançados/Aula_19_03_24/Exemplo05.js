class Livro{
    constructor(pNome, pPreco){
        this.Nome = pNome;
        this.Preco = pPreco;
        
    }

    get Nome(){return this.Nome;}
    set Nome(pNome){this.nome = pNome;}

    get Preco(){return this.Preco};
    set Preco(pPreco){this.preco = pPreco;}

    calcularDesconto(pDesconto){
        this.preco = this.preco * ((100 - pDesconto )/100);
    }
}

var obj_livro1 = new Livro("Use a cabeça Java", 100);
var obj_livro2 = new Livro("Use C#", 80);

var lista = [];
lista.push(obj_livro1);
lista.push(obj_livro2);

obj_livro1.calcularDesconto(80);
//console.log("Nome do Livro: " + obj_livro1.nome + "preco: " + obj_livro1.preco);

for(let i = 0; i < lista.length; i++){
    console.log("Nome do Livro:" + lista[i].nome + " Preco:" + lista[i].preco);
}

