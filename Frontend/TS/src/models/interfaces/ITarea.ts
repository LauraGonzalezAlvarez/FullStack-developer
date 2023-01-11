export enum Nivel{
    "Informativa",
    "Urgente",
    "Bloqueante"
}

// Interface sirve para definir la firma y los puntos necesarios a implementar por quien la use, especifica el aspecto
export interface ITarea{

    titulo: string,
    descripcion: string,
    completada: boolean,
    urgencia?: Nivel,
    resumen: () => string // Funcion que devuelve un string
}

