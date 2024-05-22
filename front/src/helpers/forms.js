export const formRegister = [
    { label: "Nombre y Apellido ", name: "name", type: "text" },
    { label: "Número de DNI ", name: "nDni", type: "number" },
    { label: "Email ", name: "email", type: "email" },
    {
        label: "Fecha de nacimiento ",
        name: "birthdate",
        type: "date",
    },
    { label: "Usuario ", name: "username", type: "text" },
    {
        label: "Contraseña ",
        name: "password",
        type: "password",
    },
    {
        label: "Repetir contraseña ",
        name: "repeatPassword",
        type: "password",
    },
];

export const formLogin = [
    { label: "Usuario ", name: "username", type: "text" },
    {
        label: "Contraseña ",
        name: "password",
        type: "password",
    },
];

export const formTurn = [
    { label: "Servicio ", name: "description", type: "text" },
    { label: "Fecha ", name: "date", type: "date" },
    { label: "Hora ", name: "time", type: "string" },
];
