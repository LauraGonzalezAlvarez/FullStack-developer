
package fundamentos;

import java.util.Scanner;

/**
 *
 * @author Laura Gonzalez
 */
public class Operadores {
    
    public static void main(String[] args){
        
        // Operadores aritméticos basicos
        Scanner entrada = new  Scanner(System.in);
        float numero1, numero2, suma, resta, mult, div, resto;
        
        System.out.println("Digite 2 numeros:");
        numero1 = entrada.nextFloat();
        numero2 = entrada.nextFloat();
        
        suma = numero1 + numero2;
        resta = numero1 - numero2;
        mult = numero1 * numero2;
        div = numero1 / numero2;
        resto = numero1 % numero2;
        
        // Operadores aritméticos combinados con asignacioin
        int numero  = 10;
        numero  += 5; // numero = numero + 5;
        numero -= 5;
        numero *= 5;
        numero /= 5;
        numero %= 5; 
        
        // Operadores de incremento y decremento
        int x = 5, y;
        x ++; // x += 1; Aumento
        x --; // x -= 1; Decremento
        
        y = x++;  // y = 5, x = 6 Primero haría la asignación y luego el aumento
        y = ++x; //  y= 6, x = 6  Primero haría el aumento y luego la asignacion
               
                    
        // Clase Math
         // Raiz cuadrada
         double raiz = Math.sqrt(9); // no funciona con int         
         double raizInt = (int)Math.sqrt(9);  // Para que funcion con int
        
         // Elevar al cuadrado
         double base = 5, exponente = 2;
         double resultado = Math.pow(base, exponente);
         
         // Redondeo
         double numero3 = 4.67;
         long resultado3 = Math.round(numero3);
        
         // Método Random
         double numero4 = Math.random();
                 
        
        // Ejercicio 1. Calcular la suma de 3 notas
        // Hacer un programa que calcule e imprima la suma de tres calificaciones 
        float nota1, nota2, nota3, suma3;
        Scanner entrada2 =new Scanner(System.in);
        System.out.println("Digite 3 calificaciones");
        nota1 = entrada.nextFloat();
        nota2 = entrada.nextFloat();
        nota3 = entrada.nextFloat();
        
        suma3 = nota1 + nota2 + nota3;
        System.out.println("\n La suma es: " + suma3); // Imprime con salto de linea 
        
        
        // Ejercicio 2. Salario mensual de un empleado
        // Hacer un programa que calcule e imprima el salario semanal de un empleado a partir de sus horas semanales trabajadas  y de su salario por hora
        int horasSemanales;
        float salarioHora, salarioTotal;
        
        System.out.println("Digite las horas semanales trabajadas: ");
        horasSemanales = entrada.nextInt();
        System.out.println("Digite el salario que gana por hora:  ");
        salarioHora = entrada.nextFloat();
        salarioTotal = horasSemanales * salarioHora;
        System.out.println("\n El salario semanal es: " + salarioTotal );
        
           
        
        // Ejercicio 3. Averiguar la cantidad de dinero
        // Guillermo tiene N dólares. 
        //Luis tiene la mitad de lo que posee Guillermo.
        //Juan tiene la mitad de lo que poseen Luis y Guillermo junto.
        //Hacer un programa que calcule e imprima la cantidad de dinero que tienen entre  los tres.
        float guillermo, luis, juan, total ;
        
        System.out.println("Qué cantidad tiene guillermo: ");
         guillermo = entrada.nextFloat();
         
        luis = 1/2*guillermo;
        juan = 1/2* (luis + guillermo);
        total = guillermo + juan + guillermo;
        
        System.out.println("\n La cantidad de dolares tienen entre los tres");
        
                       
        // Ejercicio 4. Salario mensual de un vendedor 
        // Una compañía de venta de carros usados, paga a su personal de entas un dalario de $1000
        // mensuales, mas una comisión de $150 por cada carro vendido, más el 5% del valor de la venta por carro.
        // Cada mes el capturista de la empresa ingresa en la computadora los datos pertinentes. Hacer un programa
        // que calcuel e imprima el salario mensual de un endedor dado.
        
        final int salario = 1000;
        int  nCarrosVendidos;
        float costeCarro, salarioTotal1;
        
        System.out.println("Digite el total de carros vendidos");
        nCarrosVendidos = entrada.nextInt();
        System.out.println("Digite el coste del los carros: ");
        costeCarro =entrada.nextFloat();
        salarioTotal1 = salario + (nCarrosVendidos * 150) + (0.05f*costeCarro * nCarrosVendidos);
        System.out.println("\n El total del empleado es:" + salarioTotal1);
        
        
        
        //  Ejercicio 5. Calificacion final de un estudiante
        // Participacion =10%, Primer parcial = 25%, segundo parcial = 25% y examen final =40%
        // Con float se gasta menos memoria que con double
        float participacion, primerExamen, segundoExamen, examenFinal, notaFinal;
        
        System.out.println("Digite las notas");
        participacion = entrada.nextFloat();
        primerExamen = entrada.nextFloat();
        segundoExamen = entrada.nextFloat();
        examenFinal = entrada.nextFloat();
        participacion *= 0.10f;
        primerExamen *= 0.25f;
        segundoExamen *= 0.25f;
        examenFinal *= 0.40f;
        notaFinal = participacion + primerExamen + segundoExamen +examenFinal;
        System.out.println("\n La nota final es: "+ notaFinal);
        
        
        // Ejercicio 6. Determinar el cuadrado de una suma
        // (a+b)^2 = a^2 + b^2 + 2ab
        
        
        // Ejercicio 7. A partir de las horas calcular, semanas, dias, horas
        
        // Ejercicio 8. Ecuación de segundo grado
        
        
        
        
    }

    
}
