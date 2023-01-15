
package fundamentos;

/**
 *
 * @author Laura Gonzalez Alvarez
 */
public class Ciclos {
     public static void main(String[] args){
         // Ciclo While
         // While(condion){
         // Instrucciones;
         //}
          int i = 1;
          while (i < 10){
         System.out.println(i); // 1,2,...9:
         i ++ ;        
          }
         //  Ciclo do While 
         /**
          * do{
          * Instrucciones;
          * }While(condicion);
          */
         // Va a ejecutar minimo una vez, siempre ejecuta una vez
         int y = 1;         
         do{
             System.out.println(y);             
         } while( y <= 10);
         
         // Ciclo fon
         /**
          * fo(inicializacion ; condicion ; aumento o decremento){
          *    Instrucciones
          * }
          */
         for (int n = 1; n <= 10; n ++ ){
             System.out.println(n);
                  
         }
         
     }
}
