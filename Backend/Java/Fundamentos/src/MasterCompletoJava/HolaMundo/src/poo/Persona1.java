public class Persona1 {

    private String nombre;
    private String apellido;

    public Persona1(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    @Override
    public String toString() {
        return nombre + " " + apellido;
    }
}
