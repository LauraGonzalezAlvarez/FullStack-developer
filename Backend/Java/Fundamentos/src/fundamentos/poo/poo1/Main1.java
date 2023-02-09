package poo.poo1;

public class Main1 {
    public static void main(String[] args) {
        int edad = 25;
        float altura = 1.70f;
        long distanciaAlSol = 455212252222L;

        System.out.println(String.format("Mi edad es %d", distanciaAlSol));
        System.out.println(String.format("Mi edad es %.2f", altura));

        Movie starWars = new Movie("Soy Luna", "Romatico", 90);
        starWars.toString(); // Esta es una manera de imprimir
        System.out.println(starWars); // esta es otra manera de imprimir no tengo que decir toString

        // Métodos y variables estáticas
        //Método estático: Sirve para que pueda ser usado directamente desde la clase sin necesitad de crear una instancia de la clase

        int totalFrames= starWars.getTotalFrames2(90); // Este método no es estático
        int totalFrames2= Movie.getTotalFrames(90);

    }


}
