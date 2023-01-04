export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
} // Tipado para los usuarios 

export interface CreateUserDTO extends Omit<User, 'id'> {} // Al momento de crear un usuario no será necesario enviar el id sino que este lo crea automaticamente
