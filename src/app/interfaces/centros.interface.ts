import { Departamento } from "./departamento.interface";

export interface CentrosRes{
    ok: boolean;
    hospitales: Centros[]
}

export interface Centros{
    _id: string;
    usuario: string;
    nombre: string
    departamento: Departamento;
    lat: string;
    lng: string;
}
