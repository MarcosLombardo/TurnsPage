import { useEffect, useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";
import { validate } from "../../helpers/validate";
import { formRegister } from "../../helpers/forms";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const initialState = {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
        repeatPassword: "",
    };

    const [userRegister, setUserRegister] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    const navigate = useNavigate();

    const postData = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/users/register",
                userRegister
            );
            alert("Usuario registrado correctamente");
            navigate("/login");
        } catch (error) {
            alert("No se pudo registrar");
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserRegister({ ...userRegister, [name]: value });
    };

    useEffect(() => {
        setErrors(validate(userRegister));
    }, [userRegister]);

    const handleOnRegister = (e) => {
        e.preventDefault();
        postData();
        setUserRegister(initialState);
    };

    return (
        <div className={styles.containerForm}>
            <h1>Registro de nuevo Usuario</h1>
            <form
                onSubmit={handleOnRegister}
                className={styles.box}
                autoComplete="off"
            >
                {formRegister.map(({ name, label, type }) => {
                    return (
                        <div className={styles.formGroup} key={name}>
                            <input
                                className={styles.inputs}
                                type={type}
                                name={name}
                                value={userRegister[name]}
                                onChange={handleInputChange}
                                required
                            />
                            <label className={styles.labels}>
                                {label}
                                <span style={{ color: "var(--color-red)" }}>
                                    *
                                </span>
                            </label>
                            {errors[name] && (
                                <span className={styles.errores} key={name}>
                                    {errors[name]}
                                </span>
                            )}
                        </div>
                    );
                })}
                <button
                    disabled={
                        Object.values(userRegister).some(
                            (value) => value === ""
                        ) ||
                        errors.name ||
                        errors.nDni ||
                        errors.email ||
                        errors.birthdate ||
                        errors.username ||
                        errors.password ||
                        errors.repeatPassword
                    }
                    type="submit"
                    className={styles.buttonForm}
                >
                    Registrarse
                </button>
                <p>
                    ¿Ya estás registrado?{" "}
                    <Link to="/login">Iniciar sesión</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
