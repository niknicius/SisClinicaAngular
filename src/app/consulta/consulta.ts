import { Paciente } from "app/paciente/paciente";

export class Consulta {
    

    constructor(
        public paciente: Paciente,
        public medico: Medico,
        public dataConsulta: string,
        public dataRetorno: string,
        public aberta: boolean
        ) {}
  }
