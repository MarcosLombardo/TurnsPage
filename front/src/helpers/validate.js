export const validate = (input) => {
    let errors = {};

    // Controlador de errores del name
    if (input.name === "") {
    } else if (!/^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/.test(input.name)) {
        errors.name = "El nombre debe contener solo letras";
    } else if (!/^[a-zA-Z]+\s[a-zA-Z]+$/.test(input.name)) {
        errors.name = "Debe contener nombre y apellido";
    }

    // Controlador de errores del DNI
    if (input.nDni === "") {
    } else if (!/^\d{8}$/.test(input.nDni)) {
        errors.nDni = "El DNI ingresado no es correcto";
    }

    // Controlador de errores del email
    if (input.email === "") {
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = "El email ingresado no es válido";
    }

    // Controlador de errores de la fecha de nacimiento y la edad mínima
    if (input.birthdate === "") {
    } else {
        const birthdate = new Date(input.birthdate);
        const currentYear = new Date().getFullYear();
        const minYear = 1920;
        const maxYear = 2024;
        const minAgeDate = new Date(
            currentYear - 16,
            birthdate.getMonth(),
            birthdate.getDate()
        ); // Fecha hace 16 años

        // Verifica si la fecha de nacimiento es posterior a 1900 e inferior a 2024 y si el usuario tiene al menos 16 años
        if (
            isNaN(birthdate.getTime()) ||
            birthdate.getFullYear() < minYear ||
            birthdate.getFullYear() >= currentYear ||
            birthdate.getFullYear() > maxYear ||
            birthdate > minAgeDate
        ) {
            errors.birthdate =
                "Ingrese una fecha y año válido (debe ser mayor de 16 años)";
        }
    }

    // Controlador de errores del password
    if (input.password === "") {
    } else if (input.password.length < 10) {
        errors.password = "La contraseña debe tener al menos 10 caracteres";
    }

    // Controlador de errores de confirmar el pass
    if (input.repeatPassword === "") {
    } else if (input.repeatPassword !== input.password) {
        errors.repeatPassword = "Las contraseñas no coinciden";
    }

    return errors;
};
