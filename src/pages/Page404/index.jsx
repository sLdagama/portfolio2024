import styles from './Page404.module.css'

function Page404() {
    return (
        <>
                <h2 className={styles.titulo2}>
                    Por Favor, dont diga isso...
                </h2>
                <div className={styles}>
                    <span className={styles.texto_grande}>404</span><br />
                    <strong className={styles.texto_vermelho}>Acho que tu tá lombrado!</strong>
                </div>
        </>
    )
}

export default Page404
