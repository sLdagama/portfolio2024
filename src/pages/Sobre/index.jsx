import styles from './Sobre.module.css'
import file from './images/file.png'
import html from './images/icon-html.svg'
import sql from './images/icon-sql.svg'
import css from './images/icon-css.svg'
import react from './images/icon-react.svg'
import js from './images/icon-js.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <img src={file} alt="File" className={styles.file}/>
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>
                        Sou <span>sLdaGama</span> <br />
                        <strong>Dev Full Stack</strong>
                    </p>
                    <p>Trabalho com programa desde 2022...</p>
                    <p>Sou apaixonado por segurança e codar...Um nerd nato!</p>
                    <p>Especializado em sofrer por mulher e emocionado fiel a conversante! <br />Tenho 1.80m, escuto Lana del Rey.</p>
                </div>
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>  
                <div className={styles.icones}>
                    <img src={html} alt="html" />
                    <img src={sql} alt="sql" />
                    <img src={css} alt="css" />
                    <img src={js} alt="js" />
                    <img src={react} alt="react" />
                </div>
            </div>
        </section>
    )
}

export default Sobre
