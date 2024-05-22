export const validate = (input) => {
    let errors = {};

    // Controlador de errores de la fecha del turno
    if (input.date === "") {
    } else {
        const date = new Date(input.date);
        const currentYear = new Date().getFullYear();
        const minYear = 2024;

        // Verifica si la fecha del turno es posterior a la fecha del dia
        if (
            isNaN(date.getTime()) ||
            date.getFullYear() < minYear ||
            String(date.getFullYear()).length !== 4
        ) {
            errors.date = "Ingrese un año válido";
        }

        // Validar que el turno sea de martes a sábado
        const dayOfWeek = date.getDay(); // 0 para domingo, 1 para lunes, ..., 6 para sábado
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            errors.date =
                "Los turnos solo están disponibles de martes a sábado";
        }

        // Validar que la fecha sea a partir del día actual
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Establecer la hora a las 00:00:00
        if (date < today) {
            errors.date = "La fecha del turno debe ser a partir de hoy";
        }
    }

    // Controlador de errores de la hora
    if (input.time === "") {
    } else {
        const timeParts = input.time.split(":");
        const hour = parseInt(timeParts[0]);
        const minute = parseInt(timeParts[1]);

        // Verificar que la hora esté dentro del rango permitido (de 9:00 a 20:00)
        if (hour < 9 || hour > 20 || (hour === 20 && minute !== 0)) {
            errors.time =
                "Ingrese un horario válido entre las 9:00 y las 20:00";
        }
    }

    return errors;
};
