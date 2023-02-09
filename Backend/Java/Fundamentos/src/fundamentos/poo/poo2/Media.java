package poo.poo2;


public class Media {
    private String title;
    private String genere;
    private int duration;
    private String synopsis; // Para imprimir el resumen de la pelicula

    @Override
    public boolean equals(Object object) { // este metodo me permite comparar dos objetos
        if (object instanceof Media) {
            return this.title.equals(((Media) object).getTitle()) && this.genere.equals(((Media) object).getTitle()); // Voy poniendo el .get y él me va autocompletando
// Estoy comparando si el titulo y el genero son iguales

        } else {
            return false;
        }
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public Media(String title, String genere, int duration) {
        this.title = title;
        this.genere = genere;
        this.duration = duration;

    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenere() {
        return genere;
    }

    public void setGenere(String genere) {
        this.genere = genere;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public void moveForward(int minutes) {
        System.out.println("adelantando " + minutes + "minutes");
    }

    public void dowload() { // Ejemplo de descarga con hilos
        Thread thread = new Thread(new Runnable() { // Cuando nosotros llamemos al metodo, solo se va a dormir este hilo, el hilo principal no, este seria el main, se puede crear multiples hilos con ejecucciones en paralelo
            @Override
            public void run() {
                System.out.println("Dowloading " + title);
                try {
                    Thread.sleep(1000); // Va a simular que la pelicula se está descargando
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println(title + "Dowloaded ");

            }
        });
        thread.start();
    }
}


