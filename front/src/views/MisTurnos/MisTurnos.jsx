import { useEffect } from "react";
import axios from "axios";
import Turn from "../../components/Turno/Turn";
import styles from "./MisTurnos.module.css";
import NuevoTurno from "../../components/NuevoTurno/NuevoTurno";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserTurns } from "../../redux/reducer";

const MisTurnos = () => {
    const user = useSelector((state) => state.userActive);
    const turnos = useSelector((state) => state.userTurns);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/users/${user.id}`
                );
                dispatch(setUserTurns(response.data.turns));
            } catch (error) {
                console.error("Error al obtener los datos", error);
            }
        };
        user.name && fetchData();
    }, []);

    return (
        <>
            <div className={styles.containerTurnos}>
                <h1>Nuevo turno</h1>
                <p>
                    Recordá que el horario de atención es de martes a sabado, de
                    09:00hs a 20:00hs
                </p>

                <NuevoTurno />

                <h1>Mis turnos</h1>

                {!turnos.length ? (
                    <h6>No tienes ningún turno aún</h6>
                ) : (
                    <div className={styles.containerMisTurnos}>
                        {turnos.map((turno) => {
                            return (
                                <Turn
                                    id={turno.id}
                                    key={turno.id}
                                    turno={turno}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default MisTurnos;
