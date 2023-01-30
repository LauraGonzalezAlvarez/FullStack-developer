package poo.poo1;

public class Movie {
    static final int FRAME_RESOLUTION = 60; // El final le dice que es una constante
    static final int SECONDS_IN = 60;
    String title;
    String genere;
    int duration;

    public static int getTotalFrames(int duration) { // Métodos estaticos en la parte superior
        return duration * FRAME_RESOLUTION * SECONDS_IN;
    }

    public int getTotalFrames2(int duration) {
        return duration * FRAME_RESOLUTION * SECONDS_IN;
    }

    public Movie(String title, String genere, int duration) {
        this.title = title;
        this.genere = genere;
        this.duration = duration;
    }

    public Movie() {
        title = "no tiene titulo";
        genere = "no tiene genere";
        duration = 0;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "title='" + title + '\'' +
                ", genere='" + genere + '\'' +
                ", duration=" + duration +
                '}';
    }

}
