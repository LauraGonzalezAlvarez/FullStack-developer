/**
 * función que recibe dos parámetros: una fecha con componente de hora y un número con el ID del horario.
 * La función  validar si dicha fecha está dentro de un horario establecido dentro de la función.
 * Los dias corresponden a los siguientes:
 *     0: 'Domingo',
 *     1: 'Lunes',
 *     2: 'Martes',
 *     3: 'Miercoles',
 *     4: 'Jueves',
 *     5: 'Viernes',
 *     6: 'Sabado'
 * @param {Date} date Recibe la fecha del dia y la hora de hoy
 * @param {Number} ID Recibe el ID del horario que se quiere confirmar
 * @returns {number} Retorna 1 si corresponde al horario, 0 si no
 */

let confirmarHorario = (date, ID) => {
    /**
     *
     * @type {number} dia Corresponde al día de la semana de la fecha
     */
    let dia = date.getDay();
    /**
     *
     * @type {number} hora Corresponde a la hora de la fecha
     */
    let obtenerHora = date.getHours();

    /**
     *  Se validan los horarios para cada día con el id = 1
     */
    if (ID === 1) {
        if ([1, 2, 3, 4, 5].includes(dia) && obtenerHora >= 8 && obtenerHora <= 13 || obtenerHora >= 15 && obtenerHora <= 18) {
            return 1;
        } else {
            return 0;
        }
    }
    /**
     * Se validan los horarios para cada día con el id = 2
     */
    if (ID === 2) {
        if ([1, 2, 3, 4].includes(dia) && obtenerHora >= 9 && obtenerHora <= 15 || [6].includes(dia) && obtenerHora >= 8 && obtenerHora <= 12) {
            return 1;
        } else {
            return 0;
        }
    }
    /**
     * En caso de que el id no corresponda a ninguno de los anteriores
     */
    if (ID !== 1 && ID !== 2) {
        throw new Error('ID no valido');
    }
}

/**
 *
 * @type {Date} Instancia date de la clase Date
 */
const date = new Date();
/**
 * LLamada a la función confirmarHorario
 */
confirmarHorario(date, 1)



