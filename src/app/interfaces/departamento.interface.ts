export interface DepartamentoResponse{
    ok: boolean;
    departamento: Departamento[];
}

export interface Departamento{
    _id: string;
    nombre: string; 
}