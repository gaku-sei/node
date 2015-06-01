class CoucouMachine {
    private nom: string;

    constructor(nom: string) {
      this.nom = nom;
    }

    get parle() {
        return `Coucou ${this.nom}!`;
    }
}

const machine = new CoucouMachine('tout le monde');

console.log(machine.parle); // 'Coucou tout le monde!'
