import Service from "../../components/Servicio/Service";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";

const Home = () => {
    const user = useSelector((state) => state.userActive);

    return (
        <>
            <div className={styles.containerHome}>
                {!user.name ? (
                    <h1>¡Bienvenido!</h1>
                ) : (
                    <h1>¡Bienvenido {user.name}!</h1>
                )}

                <h4>Conoce nuestros servicios ✄</h4>
                <Service />
            </div>
        </>
    );
};

export default Home;
