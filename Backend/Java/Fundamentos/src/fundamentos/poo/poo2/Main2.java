package poo.poo2;

import java.util.Scanner;

public class Main2 {
    public static void main(String[] args) {
        Movie bacToTheFuture = new Movie("Back", "ciencia fiction", 50);
        bacToTheFuture.dowload();
        Series series = new Series("Batman", "Maculino", 20, 5, 2);
        Series breakingBad = new Series("breakingBad", "Maculino", 20, 5, 2);
        Series vikings = new Series("vikings", "Maculino", 20, 5, 2);
        Series friends = new Series("friends", "Maculino", 20, 5, 2);
        bacToTheFuture.setTitle("Back");
        bacToTheFuture.setGenere("Ciencia Fiction");
        bacToTheFuture.setwOscar(true);
        Series otraPeli = new Series(); // como cree un constructor vacio puedo hacerlo

//        System.out.println(bacToTheFuture.getDuration());
//        System.out.println(series.getDuration());
        breakingBad.setSynopsis("Un profe recluta a un vago y venden dulces azules");
        vikings.setSynopsis("Un profe recluta a un vago y venden dulces azules");
        friends.setSynopsis("Un profe recluta a un vago y venden dulces azules");

        // Método para comparar dos objetos
        if (breakingBad.equals(vikings)) {
            System.out.println("Las series son iguales");
        }else{
            System.out.println("Las series no son iguales");
        }

        printInstructions();
        Scanner scanner2 = new Scanner(System.in);
        int selection = scanner2.nextInt();
        while ((selection != 0)) {

            System.out.println("\n");

            if (selection == 1) {
                System.out.println(breakingBad.getSynopsis());
            } else if (selection == 2) {
                System.out.println(vikings.getSynopsis());

            } else if (selection == 3) {
                System.out.println(friends.getSynopsis());

            } else {
                System.out.println("Seria invalida, selecciona otra");
            }
            System.out.println("\n");
            printInstructions();
            selection = scanner2.nextInt();
        }
        System.out.println("fin");


        // Como manejar los constructores cuando hay herencia:
        // Cuando tenemos un constructor en el padre,en los hijos debemos implementarlos
    }

    private static void printInstructions() {
        System.out.println("Selecciona una serie para ver su sinopsis");
        System.out.println("1) Breaking bad");
        System.out.println("2) Vikings");
        System.out.println("3) Friends");
        System.out.println("0) Salir");

    }
}
