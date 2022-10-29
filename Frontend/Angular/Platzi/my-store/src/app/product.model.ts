//Es una interface, se le debe poner export para poderlo importar en otro archivo
export interface Product{
name: string;
price: number;
image: string;
category?:string; //el signo de interrogacion indica que es opcional
}

