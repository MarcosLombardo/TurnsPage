import styles from "./Service.module.css";
import corte from "../../assets/img/Pelo.png";
import barba from "../../assets/img/Barba.png";
import afeitado from "../../assets/img/Afeitado.png";
import masaje from "../../assets/img/Masaje.png";
import ninos from "../../assets/img/Ninos.png";

const Service = () => {
    return (
        <>
            <div className={styles.containerService}>
                <img className={styles.imgi} src={corte} />
                <div className={styles.textContainer}>
                    <h3>Corte de cabello</h3>
                    <p>
                        "Nuestros expertos en estilismo te ofrecen una
                        experiencia única con cortes de pelo clásicos y
                        modernos, diseñados para realzar tu estilo y
                        personalidad. Desde cortes cortos y pulidos hasta
                        estilos más largos y desenfadados, estamos aquí para
                        ayudarte a lucir tu mejor versión. Ven y descubre la
                        tradición y la elegancia en cada corte de pelo en
                        nuestra barbería vintage."
                    </p>
                </div>
            </div>

            <div className={styles.containerService}>
                <div className={styles.textContainer}>
                    <h3>Corte de barba</h3>
                    <p>
                        "En nuestra barbería vintage, ofrecemos cortes de barba
                        precisos y personalizados para realzar tu estilo único.
                        Nuestros expertos en estilismo masculino te brindarán
                        una experiencia exclusiva, creando contornos y estilos
                        que reflejen tu personalidad y resalten tu masculinidad
                        con un toque clásico y elegante."
                    </p>
                </div>
                <img className={styles.imgd} src={barba} />
            </div>

            <div className={styles.containerService}>
                <img className={styles.imgi} src={afeitado} />
                <div className={styles.textContainer}>
                    <h3>Afeitado</h3>
                    <p>
                        "Disfruta de una experiencia de afeitado clásica y
                        revitalizante en nuestra barbería vintage. Nuestros
                        barberos expertos utilizan técnicas tradicionales y
                        productos de alta calidad para ofrecerte un afeitado
                        impecable y suave como la seda. Relájate y déjate mimar
                        mientras cuidamos de tu piel y te dejamos listo para
                        enfrentar el día con confianza y estilo."
                    </p>
                </div>
            </div>

            <div className={styles.containerService}>
                <div className={styles.textContainer}>
                    <h3>Masaje facial</h3>
                    <p>
                        "Sumérgete en la indulgencia y relajación con nuestro
                        exclusivo masaje facial en nuestra barbería vintage.
                        Nuestros especialistas en cuidado de la piel utilizan
                        técnicas rejuvenecedoras y productos de alta calidad
                        para dejar tu rostro radiante y revitalizado. Disfruta
                        de un momento de paz y renovación mientras eliminamos el
                        estrés y cuidamos de tu piel con un toque de lujo y
                        elegancia masculina."
                    </p>
                </div>
                <img className={styles.imgd} src={masaje} />
            </div>

            <div className={styles.containerService}>
                <img className={styles.imgi} src={ninos} />
                <div className={styles.textContainer}>
                    <h3>Corte de niños</h3>
                    <p>
                        "En nuestra barbería vintage, cuidamos de los pequeños
                        caballeros con cortes de pelo divertidos y a la moda.
                        Nuestros estilistas expertos se especializan en atender
                        a los más jóvenes con cortes personalizados que reflejan
                        su estilo y personalidad única. Disfruta de un ambiente
                        acogedor y amigable mientras consentimos a tus hijos con
                        cortes de pelo que los harán lucir geniales y sentirse
                        seguros."
                    </p>
                </div>
            </div>
        </>
    );
};

export default Service;
