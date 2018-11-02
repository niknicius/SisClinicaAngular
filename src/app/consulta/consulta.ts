import { Paciente } from "app/paciente/paciente";
import { Medico } from "app/medicos/medico";

export class Consulta {


    constructor(
        public idPaciente: number,
        public idMedico: number,
        public dataConsulta: string,
        public dataRetorno: string,
        public aberta: boolean
        ) {}
  }
