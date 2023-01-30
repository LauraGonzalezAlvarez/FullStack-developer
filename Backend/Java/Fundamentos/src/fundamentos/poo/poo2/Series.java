package poo.poo2;

import java.util.Scanner;

public class Series extends Media {
    int totalEpisodes;
    int totalSeasons;
    int episodeDuration;


    public Series(String title, String genere, int duration, int totalEpisodes, int totalSeasons) {// se crea un constructor con los campos que se tiene en la clase padre
        super(title, genere, duration); // hace relacion a la clase padre
        this.totalEpisodes = totalEpisodes; // Hace relacion a esta clase
        this.totalSeasons = totalSeasons;
        episodeDuration = duration; // no lleva this,porque no lo estoy recibiendo como parametro y se entiende que me refiero a los atributos de la clase

    }

    public Series() {
        super("", "", 0); // constructor vacio
    }

    public int getTotalEpisodes() {
        return totalEpisodes;
    }

    public void setTotalEpisodes(int totalEpisodes) {
        this.totalEpisodes = totalEpisodes;
    }

    public int getTotalSeasons() {
        return totalSeasons;
    }

    public void setTotalSeasons(int totalSeasons) {
        this.totalSeasons = totalSeasons;
    }

    public int getEpisodeDuration() {
        return episodeDuration;
    }

    public void setEpisodeDuration(int episodeDuration) {
        this.episodeDuration = episodeDuration;
    }

    public void moveForward() {
        System.out.println("Cuantos minutos deseas adelantar");
        Scanner scanner = new Scanner(System.in);
        int minutes = scanner.nextInt();
        super.moveForward(minutes); // llamo al metodo moveForward de la clase padre que es Media
    }

    @Override // se llama desde la lase padre que es media
    public int getDuration() {
        return episodeDuration * totalEpisodes;// Yo puedo personalizar lo que va a retornar, si colocara super haría lo que hace la clase padre
    }
}
