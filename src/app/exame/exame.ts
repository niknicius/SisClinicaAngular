export class Exame {

    constructor(
        public idPaciente: number,
        public dataExame: string,
        public valor: LongRange,
        public dataResultado: string
    ) {}
}

