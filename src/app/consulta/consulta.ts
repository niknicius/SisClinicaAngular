import { Paciente } from "app/paciente/paciente";
import { Medico } from "app/medicos/medico";

export class Consulta {
    

    constructor(
        public paciente: Paciente,
        public medico: Medico,
        public dataConsulta: string,
        public dataRetorno: string,
        public aberta: boolean
        ) {}
  }
