import styles from "./Profile.module.css";
import usuario from "../../assets/img/Profile.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/reducer";

const Profile = () => {
    const user = useSelector((state) => state.userActive);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        !user.name && navigate("/login");
    }, []);

    const handleLogout = () => {
        dispatch(removeUser());
        navigate("/login");
    };

    return (
        <div className={styles.containerProfile}>
            <h1>Mi perfil</h1>
            <div className={styles.subtitle}>
                <img src={usuario} style={{ height: "250px" }} />
                <h3>{user.name}</h3>
            </div>

            <div className={styles.content}>
                <p>
                    <span style={{ fontSize: "23px" }}>Nombre: </span>
                    {user.name}
                </p>
                <p>
                    <span style={{ fontSize: "23px" }}>DNI: </span>
                    {user.nDni}
                </p>
                <p>
                    <span style={{ fontSize: "23px" }}>Email: </span>
                    {user.email}
                </p>
                <p>
                    <span style={{ fontSize: "23px" }}>
                        Fecha de nacimiento:{" "}
                    </span>
                    {user.birthdate &&
                        new Date(user.birthdate)?.toLocaleDateString()}
                </p>
            </div>

            <div className={styles.botonSesion}>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
        </div>
    );
};

export default Profile;
