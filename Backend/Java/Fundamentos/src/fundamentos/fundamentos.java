/**
 * 
 */
package fundamentos;

import java.util.Scanner; // para leer valores por consola 
import javax.swing.JOptionPane; // Para pedir datos por ventana 

/**
 *
 * @author Laura Gonzalez
 */
public class fundamentos {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //sout  y tab--> Para imprimir
        System.out.println("Hola Mundo");
        
        
        // Datos primitivos
        // Variable: Espacio de memoria donde se almacena un valor, que puede variar a lo largo del programa
        byte entero = 120;
        float decimal = 3.5f;
        long entero2 = 2049484;
        double decimal2 = 3.5;
        char caracter ='a';
        boolean desicion = false;
          System.out.println("Variable entero: " + entero);
          
        // Datos no primitivos        
         Integer dato = null;
        String cadena = "Hola Soy laura";
        
        // Constantes: Espacio de memoria donde se almacena un valor, que no va a cambiar
        final int constante = 10;
      
        
        // Entrada y salida de datos
        // Numeros enteros
        Scanner entrada = new Scanner(System.in);
        int numero;      
        System.out.println("Digite un numero entero: ");
        numero = entrada.nextInt(); // Para guardar dato de tipo entero
        System.out.println("El numero es: "+ numero);
        
        // Numero Flotante
        float numero2;
        System.out.println("Digite un dato float: (Eje: 67,9)");
         numero2 = entrada.nextFloat();      
        System.out.println("El numero es: " + numero2);
        
        // Cadena de caracteres
        String cadena2;
        System.out.println("Ingrese una cadena");
        cadena2 = entrada.nextLine(); // Guardo toda la cadena
        cadena2 = entrada.next(); // Guarda hasta que haya un espacio
        
        // Caracter
        char letra;
        System.out.println("Ingrese un caracter");
        letra = entrada.next().charAt(0); // Solo guarda el primer digito
          
        // Entrada y salida de datos con JOptionPanel: Ventanas emergentes 
        String cadena3;
        int entero3;
        char letra3;
        double decimal3;
        
        // Pedimos los datos
        cadena3 = JOptionPane.showInputDialog("Digite una cadena: ");
        entero3 =Integer.parseInt( JOptionPane.showInputDialog(" Digite un valor entero"));
        letra3 = JOptionPane.showInputDialog("Digite un caracter").charAt(0);
        decimal3 = Double.parseDouble(JOptionPane.showInputDialog("Digite un decimal (double) con punto"));
        
        // Mostramos los datos
        JOptionPane.showMessageDialog(null, "La cadena es: " + cadena3);
        JOptionPane.showMessageDialog(null, "El valor entero es: " + entero3);
        JOptionPane.showMessageDialog(null, "El caracter es: " + letra3);
        JOptionPane.showMessageDialog(null, "el decimal double es:  " + decimal3);
        
        
        
        
    }
    
}
