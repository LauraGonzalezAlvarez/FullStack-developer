package comprogramacion.programacionfuncional;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ClaseIAS {
    public static void main(String[] args) {
        List<Integer> list = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // Asignación de valores
        list.stream() // Operacion de inicio
                .skip(2) // Operación intermedia
                .forEach(System.out::println); // Operación de finalización


        Stream<Integer> streamInstanceado = Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);// Instanciar un Stream


        System.out.println("Otra lista 2");
        List<Integer> list2 = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // Asignación de valores
        list.stream() // Operacion de inicio
                .skip(2) // Operación intermedia
                .collect(Collectors.toList()); // Operación de finalización, retorna una lista, aplica inmutabilidad
        System.out.println(list2);

        System.out.println("Otra lista 3");
        List<Integer> list3 = List.of(1, 8, 2, 3, 4, 5, 6, 7);
        list3.stream()
                .peek(System.out::println)
                .filter(x -> x < 3)
                .skip(1)
                .forEach(System.out::println);

        System.out.println("Otra lista 4");
        List<Integer> list4 = List.of(10, 8, 12, 20, 18, 30, 70);
        list4.stream()
                .filter(x -> x > 11)
                .peek(System.out::println)// Despues de conocoer a los elementos que cumplen la condición, los ordena y los imprime
                .sorted() // Necesita conoocer toda la lista para ordenarla 12
                .forEach(System.out::println);

        System.out.println("Listas de listas");
        List<Integer> list5 = List.of(32, 10, 8);
        List<Integer> list6 = List.of(12, 20);
        List<Integer> list7 = List.of(18, 30, 70);
        List<Integer> list8 = List.of(1, 2, 24);
        List<List<Integer>> listas = List.of(list5, list6, list7, list8);
        listas.stream()
                .flatMap(List::stream)// Aplanar la lista de listas
                .filter(x -> x >= 20)
                .forEach(System.out::println);


    }

}
