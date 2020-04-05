import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface CitasInterface{
    id_usuario?:string;
    id_solicitud?:string;
    fecha?: Timestamp<any>;
    hora?: string;
    id?: string;
    estado?:boolean;
}