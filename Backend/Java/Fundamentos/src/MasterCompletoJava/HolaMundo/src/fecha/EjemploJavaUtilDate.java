import java.text.SimpleDateFormat;
import java.util.Date;

public class EjemploJavaUtilDate {
    public static void main(String[] args) {
        
        Date fecha = new Date();

        System.out.println("fecha = " + fecha);

        // TODO Esta clase me permite personalizar la fecha
        //dd dia
        //MM mes
        //yyyy año
        // Lo puede buscar en intermet para más formatos
        SimpleDateFormat df = new SimpleDateFormat("EEEE dd 'de' MMMM, yyyy");
        String fechaStr = df.format(fecha);

        long j = 0;
        for(int i = 0; i < 100000000; i++){
            j +=i;
        }

        System.out.println("j = " + j);

        Date fecha2 = new Date();
        // todo calcular el tiempo transcurrido en el for
        long tiempoFinal = fecha2.getTime() - fecha.getTime();
        System.out.println("Tiempo transcurrido en el for = " + tiempoFinal);
        System.out.println("fechaStr = " + fechaStr);
    }
}
