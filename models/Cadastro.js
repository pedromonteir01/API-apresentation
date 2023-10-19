export default class Cadastro {
    constructor(nomeTime) {
        this.nomeTime = nomeTime;
        this.id = this.getId()
    }
    getId(){
        return Math.floor(Math.random() *9999);
    }
}