export default class Cadastros{
    constructor(){
        this.lista = [];
    }
    addCadastros(cadastro){
        this.lista.push(cadastro);
    }
    deleteCadastros(id){
    return this.lista = this.lista.filter(cadastro => cadastro.id !== id);

    }
    editarCadastro(id,nomeTime){
    this.lista.map((cadastro) => {
        if(cadastro.id == id){
            cadastro.nomeTime = nomeTime;
        }})
    }
}