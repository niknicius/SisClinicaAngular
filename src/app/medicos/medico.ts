export class Medico {

    public id: number;
    
    constructor(
        public nome: string,
        public especialidade: string,
        public crm: number,
        public cpf: string,
        public salaDeAtendimento: number,
        public salario: number,
        public plantao: boolean){}
}
