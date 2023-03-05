package comprogramacion.programacionfuncional;

import java.util.function.Function;
import java.util.function.Predicate;

public class MathFunction {
    public static void main(String[] args) {

        // Esto es una manera de hacerlo, de la forma larga
        Function<Integer, Integer> square = new Function<Integer, Integer>() {
            @Override
            public Integer apply(Integer x) {
                return x * x;
            }
        };
        System.out.println(square.apply(8));

        // La forma corta de hacerlo
        Function<Integer, Boolean> isOdd = x -> x % 2 == 1;

        //Los predicados sirven para Testear si algo es válido, hacer validaciones rápidas
        Predicate<Integer> isEven = x -> x % 2 == 0;
        isEven.test(4);// True
        Predicate<Student> isApproved = student -> student.getCalificacion()>= 5.0;
        Student sinuhe = new Student(5.9);
        System.out.println(isApproved.test(sinuhe));
    }
    static class Student{
        private double calificacion;
        public Student(double calificacion){
            this.calificacion = calificacion;
        }
        public double getCalificacion(){
            return calificacion;
        }
    }
}
