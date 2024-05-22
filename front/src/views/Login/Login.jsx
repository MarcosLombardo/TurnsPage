import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { validate } from "../../helpers/validate";
import { formLogin } from "../../helpers/forms";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserActive } from "../../redux/reducer";

const Login = () => {
    const initialState = {
        username: "",
        password: "",
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const postData = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/users/login",
                userLogin
            );
            alert("Usuario logueado correctamente");
            dispatch(setUserActive(response.data.user));
            navigate("/");
            setUserLogin(initialState);
        } catch (error) {
            console.error("Error fetching data: ", error);
            alert("No se pudo loguear el usuario");
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserLogin({ ...userLogin, [name]: value });
    };

    useEffect(() => {
        setErrors(validate(userLogin));
    }, [userLogin]);

    const handleOnlogin = (e) => {
        e.preventDefault();
        postData();
        setUserLogin(initialState);
    };

    return (
        <div className={styles.containerForm}>
            <h1>Login</h1>
            <form
                onSubmit={handleOnlogin}
                className={styles.box}
                autoComplete="off"
            >
                {formLogin.map(({ name, label, type }) => {
                    return (
                        <div className={styles.formGroup} key={name}>
                            <input
                                className={styles.inputs}
                                type={type}
                                name={name}
                                value={userLogin[name]}
                                onChange={handleInputChange}
                            />
                            <label className={styles.labels}>
                                {label}
                                <span style={{ color: "var(--color-red)" }}>
                                    *
                                </span>
                            </label>
                        </div>
                    );
                })}
                <button
                    disabled={Object.values(userLogin).some(
                        (value) => value === ""
                    )}
                    type="submit"
                    className={styles.buttonForm}
                >
                    Iniciar sesión
                </button>
                <p>
                    ¿Aún no estás registrado?{" "}
                    <Link to="/register">Registrarse</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
