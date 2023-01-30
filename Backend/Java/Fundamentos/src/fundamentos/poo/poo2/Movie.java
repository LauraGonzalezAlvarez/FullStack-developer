package poo.poo2;

public class Movie  extends Media{
    boolean wOscar;

    public Movie(String title, String genere, int duration, boolean wOscar) {
        super(title, genere, duration);
        this.wOscar = wOscar;
    }

    public Movie(String title, String genere, int duration) {
        super(title, genere, duration);
    }


    public boolean iswOscar() {
        return wOscar;
    }

    public void setwOscar(boolean wOscar) {
        this.wOscar = wOscar;
    }

    @Override // se sobre escribe el metodo de la clase padre que es media
    public int getDuration() {
        return super.getDuration(); // retornará lo que esté en Media
    }
}
