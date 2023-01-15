
package fundamentos;

import javax.swing.JOptionPane;

/**
 *
 * @author Laura González Álvarez
 */
public class Condicionales {
     public static void main(String[] args){
         // = Operador de asignacion
         // == Operador de igualdad
         // != Operador de desigualdad
         // > Mayor
         // < Menor
         // < = Menor o igual
       /**
        * La sentencia if: 
        * if (condicion){
        *   instruccion1;
        * }
        * else{
        * Instruccion2;
        * }
        */
         int numero, dato = 5;
         numero = Integer.parseInt(JOptionPane.showInputDialog("Digite un numero: "));
         if( numero == dato){
             JOptionPane.showMessageDialog(null, "El numero es 5");
         }
         else {
             JOptionPane.showMessageDialog(null, "El numero es diferente de 5");
         }
         
         // Sentencia switch
         /**
          * switch(dato)
          *     case 1: Intrucciones1;
          *                 break;
          *     case n: InstruccionN;
          *                 break;
          *     default: CasoContrario;
          *                 break;
          */
         int dato1;
         dato1 = Integer.parseInt( JOptionPane.showInputDialog("Digite un numero entre 1-5: ") ) ;
         switch (dato){
             case 1: JOptionPane.showMessageDialog(null, "El numero es el 1");
                    break;
             case 2: JOptionPane.showMessageDialog(null, "El numero es 2");
                    break;
             default: JOptionPane.showMessageDialog(null, "El numero no está permitido");
         }
         
         
         // Operador Ternario
         // valor = {condicion} ? valor1 : valor2
         // Si es verdadero se cumple el valor1, sino el valor2
         int numero2;
         String mensaje;
         
         numero =  Integer.parseInt(JOptionPane.showInputDialog("Digite un numero"));
         mensaje = (numero % 2 == 0)? "es par"  : " es impar";
         JOptionPane.showMessageDialog(null, "\n El numero " + mensaje); // Se tiene esta opcion
         JOptionPane.showMessageDialog(null, (numero % 2 == 0)? "es par"  : " es impar"); // O tambien se tiene esta opcion 
         
         // Ejercicio 1
         // Hacer un programa que lea unnúmero entero y muestre si el número es múltiplo de 10
         
                 
         
         // Ejercicio2
         // Pedir dos numeros y decir cual es el mayor o si son iguales
         
         
         // Ejercicio 3
         // Leer un caracter por teclado y comprobar si es una letra mayuscula 
         
         // Ejercicio 4
         // en MegaPlaza se ace un 20% de descuento a los clientes cuya compra supere los 
         // $ 300. ¿ Cuál será la cantidad que patará una persona por su compra?
         
         // Ejercicio 5
         // // Un obrero necesita calcular  su salario semana, el cual se obtiene de la siguiente manera: 
         
         // Ejercicio 6
         // Hacer unprograma que tome dos números y diga si ambos son pares o impares
         
         // Ejercicio 7
         //  Pedir tres numeros y mostrarlos ordenados de menor a mayor
         
         // Ejercicio 8
         // Pedir un número entre 0 y 99 y decir cuántas citras tiene
         
         // Ejercicio 9
         //  Pedir el dia, mes, año, de una fecha e indicar si la fecha es correcta. S poniendo que todos los meses son de 30 dias
         
         // Ejercicio 10
         //  Pedir el dia, mes y año de una fecha e indicar si la fecha es correcta. Con meses de 28, 30 y 31 dias sin años bibiestos 
         
               
     }
}
