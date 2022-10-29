const username: string ='Laurilla';
const sum = (a: number, b:number) =>{
  return a + b;
}
sum(1,2);

class Person{
  private age: number; //es privado
  lastname: string;
  constructor(age: number,lastname: string){
    this.age = age;
    this.lastname = lastname;
  }
}

const laurilla = new Person(22, 'Gonzalez');

laurilla.lastname;
