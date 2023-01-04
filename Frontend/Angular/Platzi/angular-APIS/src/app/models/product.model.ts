// Recordar que el tipado evita que cometamos errores como enviarle cosas que no son, tenemos una flexibilidad y un feetback temprano
export interface Category { // Un tipado especifico para la categoria
  id: string;
  name: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[]; // Porque es un array de imagenes
  description: string;
  category: Category;
  taxes?: number; // Atributo que no es enviado desde el backend sino que va a ser calculado en el frontend, ejercicio para la transformacion de peticiones 
}

// Extendemos de la interface Product, omitiendo el id y la category, omit es propio de typescript
// Estoy diciendo yo quiero una interface heredada de product que omita estos valores 
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number; // Creamos un nuevo campo
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> { }
// Extendemos de CreateProductDTO y le decimos que todos los aributos son opcionales, es de typescript y lo que hace es poner el signo de pregunta en todos los atributos 
