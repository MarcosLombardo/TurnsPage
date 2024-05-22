import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Face from "../../assets/img/Facebook.png";
import Inst from "../../assets/img/Instagram.png";
import Twit from "../../assets/img/Twitter.png";
import Tik from "../../assets/img/TikTok.png";

const Footer = () => {
    return (
        <>
            <div className={styles.containerFooter}>
                <div className={styles.containerDev}>
                    <p>&copy; Marcos.dev 2024</p>
                </div>
                <div className={styles.containerIconos}>
                    <p>Seguinos en nuestras redes:</p>
                    <Link to="https://www.instagram.com" target="_blank">
                        <img src={Face} />
                    </Link>
                    <Link to="https://www.facebook.com" target="_blank">
                        <img src={Inst} />
                    </Link>
                    <Link to="https://www.twitter.com" target="_blank">
                        <img src={Twit} />
                    </Link>
                    <Link to="https://www.tiktok.com" target="_blank">
                        <img src={Tik} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;
