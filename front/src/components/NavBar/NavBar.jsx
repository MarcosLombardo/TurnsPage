import styles from "./NavBar.module.css";
import logo from "../../assets/img/Poste.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
    const location = useLocation();
    const user = useSelector((state) => state.userActive);

    return (
        <div className={styles.containerNavBar}>
            <div className={styles.contLogo}>
                <Link to="/" className={styles.logo}>
                    <img src={logo} alt="logo de la barbería" />
                    <h2>Que Corte</h2>
                    <img src={logo} alt="logo de la barbería" />
                </Link>
            </div>
            <div className={styles.contNav}>
                <nav>
                    <Link
                        to="/"
                        className={
                            location.pathname === "/" ? styles.active : ""
                        }
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={
                            location.pathname === "/about" ? styles.active : ""
                        }
                    >
                        About
                    </Link>
                    {user.name && (
                        <Link
                            to="/misturnos"
                            className={
                                location.pathname === "/misturnos"
                                    ? styles.active
                                    : ""
                            }
                        >
                            Turnos
                        </Link>
                    )}
                </nav>
            </div>
            <div className={styles.contPerf}>
                {user.name ? (
                    <Link to="/profile" className={styles.perfilLink}>
                        {user.name}
                    </Link>
                ) : (
                    <Link to="/profile" className={styles.perfilLink}>
                        Ingresar
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
