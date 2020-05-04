import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface CitasHospitalesInterface {    
    id_usuario?:string;
    estado?: boolean;
    hospital?: string;    
    fecha?: Date;
    start?: Timestamp<Date>
    title?: string;
    hora?: string;
    id?: string;
}