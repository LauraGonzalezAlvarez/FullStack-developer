/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package fundamentos;

import java.util.Scanner;
import javax.swing.JOptionPane;

/**
 *
 * @author lhaog
 */
public class Arreglos {
     public static void main(String[] args){
         int[] numeros = new int[3];
         int[] numeros2 = {1,3,4,5};
         
         
         numeros[0] = 7;
         numeros[1] = 10;
         numeros[2] = 13;
         
         for (int i = 0; i < 3; i++) {
             System.out.println("numeros i");
             
          // Lenar un arreglo
          int nElementos;
          Scanner entrada = new Scanner(System.in);
          
          nElementos = Integer.parseInt(JOptionPane.showInputDialog("Digite la cantidad de numeros " ));
          char[] letras = new char[nElementos];
             for (int j = 0; j < nElementos; j++) {
              System.out.println("Digite los elementos");
             System.out.println("Digite un caracter");
             letras[i] = entrada.next().charAt(0);
             }
          
          
                  
             
         }
     }
}
