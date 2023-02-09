import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class EjemploJavaUtilCalendar {
    public static void main(String[] args) {

        //Calendar asigna parametros  de fechas no un calentadior
        // get time objengo la fecha en formato Date

        //Esta es una clase abstracta, no se puede instanciar con new
        Calendar calendario = Calendar.getInstance(); // de esta manera se instancia por debajo

        //calendario.set(2019, Calendar.SEPTEMBER, 25, 18, 20, 10);
        calendario.set(Calendar.YEAR, 2020);
        calendario.set(2020,0,25); //Permite indicar una fecha en especifico
        calendario.set(Calendar.MONTH, Calendar.MARCH);
        calendario.set(Calendar.DAY_OF_MONTH, 25);

        //calendario.set(Calendar.HOUR_OF_DAY, 21);
        calendario.set(Calendar.HOUR, 7);
        calendario.set(Calendar.AM_PM, Calendar.PM);
        calendario.set(Calendar.MINUTE, 20);
        calendario.set(Calendar.SECOND, 10);
        calendario.set(Calendar.MILLISECOND, 125);

        Date fecha = calendario.getTime();
        System.out.println("fecha sin formato = " + fecha);

        SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:SSS a");//Damos formato a la fecha
        String fechaConFormato = formato.format(fecha);
        System.out.println("fecha Con Formato = " + fechaConFormato);

        Calendar calActual = Calendar.getInstance();
        Date fecha2 = calActual.getTime();


        //Tambien me permite comparar fechas TODO

        if(fecha.after(fecha2)){
            System.out.println("fecha1 (del usuario) es después que fecha2 (actual)");
        } else if(fecha.before(fecha2)){
            System.out.println("fecha es anterior que fecha2");
        } else if(fecha.equals(fecha2)){
            System.out.println("fecha es igual a fecha2");
        }

        if(fecha.compareTo(fecha2) > 0){
            System.out.println("fecha1 (del usuario) es después que fecha2 (actual)");
        } else if(fecha.compareTo(fecha2) < 0){
            System.out.println("fecha es anterior que fecha2");
        } else if(fecha.compareTo(fecha2) == 0){
            System.out.println("fecha es igual a fecha2");
        }

    }
}
