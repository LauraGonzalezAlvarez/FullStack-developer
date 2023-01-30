package poo.javaColletions;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;

public class Main3 {
    public static void main(String[] args) {
        // Los arraylist son listas dinamicas, es decir, que se pueden modificar en tiempo de ejecucion, solo puede ser de tipo objeto como: String, Integer, etc.
        ArrayList<String> stringsList = new ArrayList<>();
        ArrayList<String> stringsList2 = new ArrayList<>();
        ArrayList<Integer> stringsList3 = new ArrayList<>();
        ArrayList<Boolean> stringsList4 = new ArrayList<>();

        stringsList.add("Breaking dead"); // Método para agregar elementos a la lista
        stringsList2.add("Breaking 2"); // Método para agregar elementos a la lista
        stringsList2.add("Novias enamoradas"); // Método para agregar elementos a la lista
        stringsList.add("Vikingos");
        stringsList.add("Friends"); // Método para eliminar elementos de la lista

        System.out.println(stringsList);

        stringsList.remove("Friends"); // Método para eliminar elementos de la lista
        System.out.println(stringsList);

        System.out.println(stringsList.contains("Breaking dead")); // Método para verificar si un elemento existe en la lista

        String element = stringsList.get(0); // Método para obtener un elemento de la lista, segun la posicion que se le indique
        System.out.println(element);

        stringsList.removeAll(stringsList); // Método para borrar todos los elementos de la lista
        System.out.println(stringsList);

        stringsList.add("Friends"); // Método para eliminar elementos de la lista
        System.out.println(stringsList);

        stringsList.clear(); // Método para borrar todos los elementos de la lista, igual que el anterior
        System.out.println(stringsList);

        stringsList.addAll(stringsList2); // Método para agregar todos los elementos de una lista a otra
        System.out.println(stringsList + " " + "Tamaño del arreglo: " + stringsList2.size()); // Tambien imprime el tamaño de la lista

    //Como iterar un array list, se usa normalmente los ciclos pero voy a escrribir una en particular
        for (int i = 0; i < stringsList.size(); i++) {
            System.out.println(stringsList.get(i));
        }

        // Otra forma de iterar un array list
        for (String element2 : stringsList) {
            System.out.println(element2);
        }

        // Otra forma de iterar un array list
        stringsList.forEach(element3 -> {
            System.out.println(element3);
        });

        // Otra forma de iterar un array list
        System.out.println("\n");
        System.out.println("ForEach");
        stringsList.forEach(System.out::println);

        // Otra forma de iterar un array list
        Iterator<String> mediaIterator = stringsList.iterator(); // Se crea un iterador para recorrer la lista
        while (mediaIterator.hasNext()) { // Mientras el iterador tenga un siguiente elemento
            String element4 = mediaIterator.next(); // Se obtiene el elemento
            System.out.println(element4);
        }

        // Cómo ordenar los elementos de un array list
        System.out.println("\n");
        System.out.println("Ordenalos elementos de la lista");
        stringsList.sort(Comparator.naturalOrder()); // Se ordenan los elementos de la lista
        System.out.println(stringsList);

        // Ordenar en orden inverso
        System.out.println("\n");
        System.out.println("Ordena la lista de forma inversa");
        stringsList.sort(Comparator.reverseOrder()); // Se ordenan los elementos de la lista
        System.out.println(stringsList);
        // Tambien puedo crear un medoto para ordenar los elementos de una lista extendiendo de la clase Collections

        // Ordenar segun la duracion
        System.out.println("\n");
        System.out.println("Ordena la lista segun la duracion");
        stringsList.sort(Comparator.comparing(String::length)); // Se ordenan los elementos de la lista, pero en este caso se ordenan segun la longitud de cada elemento

        // Ejemplo de try catch1: El try catch se usa para capturar errores en tiempo de ejecucion, se ponen en el codigo donde se cree que puede haber un error
        try {
            System.out.println(stringsList.get(5));
        } catch (IndexOutOfBoundsException e) { // Se tiene que poner el tipo de error que se cree que puede haber, con exception se captura cualquier error
            // Lo ideal del try catch es que englobe la menor cantidad de codigo posible para poder saber en donde se esta produciendo el error y tratar de limitarlo
            // al tipo de exception que pueda ocurrir, lo ideal es tratar de evitar el uso de try catch es mejor usar if else
            System.out.println("No se puede obtener el elemento");
        }

    }


}
