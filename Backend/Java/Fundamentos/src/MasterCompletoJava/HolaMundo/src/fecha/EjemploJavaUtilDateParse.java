import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;



// TODO convertir una fecha String a objeto del tipo Date.
public class EjemploJavaUtilDateParse {
    public static void main(String[] args) {

        Scanner s = new Scanner(System.in);
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");// este es el formato en que vamos a recibir

        System.out.println("Ingrese una fecha con formato 'yyyy-MM-dd'");
        try {
            Date fecha = format.parse(s.next());// parse es el método que convierte un String a Date
            // next retorna la fecha
            System.out.println("fecha = " + fecha);
            System.out.println("format = " + format.format(fecha));// Este le da el formato que le dimos en el SimpleDateFormat

            //TODO comparar fechas

            Date fecha2 = new Date();
            System.out.println("fecha2 = " + fecha2);

            // Si fecha es mayor que fecha2, entonces es true
            if(fecha.after(fecha2)){
                System.out.println("fecha1 (del usuario) es después que fecha2 (actual)");
            } else if(fecha.before(fecha2)){
                System.out.println("fecha es anterior que fecha2");
            } else if(fecha.equals(fecha2)){
                System.out.println("fecha es igual a fecha2");
            }

            //Metodo de la clase date, que compara fechas es una interface
            //Tambien me permite validar si una fecha es mayor o menor que otra
            if(fecha.compareTo(fecha2) > 0){
                System.out.println("fecha1 (del usuario) es después que fecha2 (actual)");
            } else if(fecha.compareTo(fecha2) < 0){
                System.out.println("fecha es anterior que fecha2");
            } else if(fecha.compareTo(fecha2) == 0){
                System.out.println("fecha es igual a fecha2");
            }

            
        } catch (ParseException e) { // Manejo de errores para la fecha
            //e.printStackTrace();
            System.err.println("La fecha tiene un formato incorrecto: " + e.getMessage());
            System.err.println("El formato debe ser 'yyyy-MM-dd'");
            System.exit(1);
            //main(args);
        }
    }
}
