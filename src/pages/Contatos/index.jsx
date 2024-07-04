import styles from './Contatos.module.css'
import { GoMail } from 'react-icons/go'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

function Contatos() {
    return (
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Chama no zap novinha</h3>
            <p>Vai que podemos fechar né?...</p>

            <div className={styles.icones}>

                <a href="https://www.instagram.com/sael.lucyxx_" target="_blank" rel="noopener noreferrer">
                    <BsInstagram className={styles.icone}/>
                </a>
                <a href="https://github.com/sLdagama" target="_blank" rel='noopener noreferrer'>
                    <BsGithub className={styles.icone}/>
                </a>

                <a href="https://www.linkedin.com/in/samuel-lucas-alves-dos-santos-460199308" target="_blank" rel='noopener noreferrer'>
                    <BsLinkedin className={styles.icone}/>
                </a>
            </div>
        </section>
    )
}

export default Contatos
