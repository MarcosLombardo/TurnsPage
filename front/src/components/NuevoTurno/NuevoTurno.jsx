import { useEffect, useState } from "react";
import styles from "./NuevoTurno.module.css";
import axios from "axios";
import { validate } from "../../helpers/validateTurn";
import { formTurn } from "../../helpers/forms";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NuevoTurno = () => {
    const initialState = {
        description: "",
        date: "",
        time: "",
    };

    const user = useSelector((state) => state.userActive);
    const [newTurn, setNewTurn] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    const navigate = useNavigate();

    const postData = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/turns/schedule",
                { ...newTurn, userId: user.id }
            );
            alert("Se guardó el turno correctamente");
            navigate("/");
        } catch (error) {
            alert("No se pudo generar el turno");
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewTurn({ ...newTurn, [name]: value });
    };

    useEffect(() => {
        setErrors(validate(newTurn));
    }, [newTurn]);

    const handleOnRegister = (e) => {
        e.preventDefault();
        postData();
        setNewTurn(initialState);
    };

    return (
        <>
            <form
                onSubmit={handleOnRegister}
                className={styles.box}
                autoComplete="off"
            >
                {formTurn.map(({ name, label, type }) => {
                    return (
                        <div className={styles.formGroup} key={name}>
                            <input
                                className={styles.inputs}
                                type={type}
                                name={name}
                                value={newTurn[name]}
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
                        Object.values(newTurn).some((value) => value === "") ||
                        errors.description ||
                        errors.date ||
                        errors.time
                    }
                    type="submit"
                    className={styles.buttonForm}
                >
                    Guardar turno
                </button>
            </form>
        </>
    );
};

export default NuevoTurno;
