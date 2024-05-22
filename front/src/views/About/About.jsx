import styles from "./About.module.css";
import about1 from "../../assets/img/About1.jpeg";
import about2 from "../../assets/img/About2.jpeg";
import about3 from "../../assets/img/About3.jpeg";

const About = () => {
    return (
        <>
            <div className={styles.containerAboutUs}>
                <h1>About Us</h1>

                <div className={styles.containerAbout}>
                    <img src={about1} />
                    <div className={styles.containerAboutText}>
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Voluptatum, quia. Porro nostrum vitae
                            voluptatibus illum, quasi nobis tempore? A dolores
                            molestias aspernatur reiciendis obcaecati quidem
                            nihil commodi officiis sint eaque.
                        </p>
                    </div>
                </div>

                <div className={styles.containerAbout}>
                    <div className={styles.containerAboutTextIzq}>
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Voluptatum, quia. Porro nostrum vitae
                            voluptatibus illum, quasi nobis tempore? A dolores
                            molestias aspernatur reiciendis obcaecati quidem
                            nihil commodi officiis sint eaque.
                        </p>
                    </div>
                    <img src={about2} />
                </div>

                <div className={styles.containerAbout}>
                    <img src={about3} />
                    <div className={styles.containerAboutText}>
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Voluptatum, quia. Porro nostrum vitae
                            voluptatibus illum, quasi nobis tempore? A dolores
                            molestias aspernatur reiciendis obcaecati quidem
                            nihil commodi officiis sint eaque.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
