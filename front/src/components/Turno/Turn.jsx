import styles from "./Turn.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cancelTurnAction } from "../../redux/reducer";

const Turn = ({ turno }) => {
    const { date, time, description, status, id } = turno;
    const dispatch = useDispatch();

    const cancelTurn = async () => {
        try {
            const response = await axios.put(
                `http://localhost:3000/turns/cancel/${id}`
            );
            dispatch(cancelTurnAction(id));
        } catch (error) {
            console.error("Error al obtener los datos", error);
        }
    };

    const handleCancel = () => {
        cancelTurn();
    };

    return (
        <>
            <div className={styles.containerTurns}>
                <h2>{description}</h2>
                <div>
                    <h3>Fecha</h3>
                    <h4>{date && new Date(date)?.toLocaleDateString()}</h4>
                </div>
                <div>
                    <h3>Hora</h3>
                    <h4>{time}</h4>
                </div>
                <h3 className={styles[status]}>{status.toUpperCase()}</h3>
                <button
                    className={styles.buttonCancel}
                    onClick={handleCancel}
                    disabled={status == "cancelled"}
                >
                    Cancelar turno ⊗
                </button>
            </div>
        </>
    );
};

export default Turn;
