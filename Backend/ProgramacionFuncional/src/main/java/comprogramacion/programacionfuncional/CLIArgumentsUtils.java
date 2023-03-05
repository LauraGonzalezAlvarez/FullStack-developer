package comprogramacion.programacionfuncional;

import java.util.function.Consumer;
import java.util.function.Supplier;

public class CLIArgumentsUtils {
    static void showHelp(CLIArguments cliArguments){

        // Consumer es una interface generica
        // Uso: Realizar operaciones por cada tipo de dato y por cada dato ir consumiento e iterando
        // Por ejemplo borrar archivo, recibes una lista de archivos y vas eliminando cada archivo que va recibiendo el consumer
        Consumer<CLIArguments> consumerHelper = cliArguments1 -> {
            if (cliArguments1.isHelp()){
                System.out.println("Manual Solicitado");
            }
        };
        consumerHelper.accept(cliArguments);
    }
    // Suplier es una función que se encarga de proveer datos
    static CLIArguments generateCLI(){
        Supplier<CLIArguments> generator = () -> new CLIArguments();
        return generator.get();
    }

}
